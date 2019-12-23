pipeline {
  agent { docker { image 'node:10-alpine' } }
  stages {
    stage('build') {
      environment {
        HOME = '.' 
      }
      steps {
        sh 'npm install'
        sh 'npm build'
        sh 'echo "===== VIVA A PORRA DO GARÇOM ====="'
      }
    }
  }
}
