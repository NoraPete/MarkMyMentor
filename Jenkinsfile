pipeline {
	environment {
		registry = "np4519/markmymentor"
		registryCredential = 'norapete_dockerhub'
		dockerImage = ''
	}
	agent any
	stages {

		stage ('Checkout SCM') {
			steps {
				checkout scm
			}
		}

        stage ('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }

		stage ('Build') {
			steps {
				script {
          dockerImage = docker.build registry
        }		
			}
		}

		stage ('Deploy to dockerhub') {
			steps {
				script {
					docker.withRegistry( '', registryCredential ) {
						dockerImage.push()
					}
				}
			}
		}

	}
}
