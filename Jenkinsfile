pipeline {
  agent { docker { image 'node:6.3' } }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
        sh 'npm build'
        sh 'echo "===== VIVA A PORRA DO GARÇOM ====="'
      }
    }
  }
}
