pipeline {
    agent any

    environment {
        DOCKERHUB_REPO = "tuusuario/sgu-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'github-creds', url: 'https://github.com/AlanVortex/SGU-ADHR-10B.git'
            }
        }

        stage('Backend Build') {
            steps {
                dir('server') {
                    sh './mvnw clean package -DskipTests'
                }
            }
        }

        stage('Frontend Build') {
            steps {
                dir('sgu-frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Stop Running Containers') {
            steps {
                sh 'docker-compose down || true'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
