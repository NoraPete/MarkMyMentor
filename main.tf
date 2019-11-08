provider "aws" {
  profile    = var.aws_credential
  region     = var.aws_region
}

resource "aws_security_group" "mark_my_mentor" {
  
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
    security_groups = [var.rds_sec_group]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

}

resource "aws_instance" "mark_my_mentor" {
  count           = var.instance_num
  ami             = var.aws_ami
  instance_type   = var.aws_inst_type
  security_groups = ["${aws_security_group.mark_my_mentor.name}"]
  key_name        = var.private_key

  tags            = {
    Name = "mark_my_mentor-${count.index}"
  }

  connection {
    type        = "ssh"
    user        = "ubuntu"
    host        = self.public_ip
    private_key = file(var.keypair_path)
  }

  provisioner "file" {
    source      = "./scripts/"
    destination = "/tmp"
  }

  provisioner "file" {
    source      = "./.env"
    destination = "~/.env"
  }

  provisioner "remote-exec" {
    inline = [
      "bash /tmp/setup.sh",
      "bash /tmp/get_dependencies.sh",
      "bash /tmp/deploy.sh"
    ]
  }
}

