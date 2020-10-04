pipeline {
  agent {
    label 'node-raspberrypi'
  }
  environment {
    PROJECT_DIRECTORY = '/home/node/code/tropical-bartender/'
  }
  stages {
    stage('Build') {
      steps {
        sh 'git clean -xdf'
        sh 'npm install --production'
        sh 'tar -czvf ${JOB_NAME}-build-${BUILD_NUMBER}.tar.gz package.json ecosystem.config.js src node_modules'
      }
    }
    stage('Transfer') {
      steps {
        sh 'rm -rf ${PROJECT_DIRECTORY}*'
        sh 'mv ${JOB_NAME}-build-${BUILD_NUMBER}.tar.gz ${PROJECT_DIRECTORY}'
        sh 'tar -xvf ${PROJECT_DIRECTORY}${JOB_NAME}-build-${BUILD_NUMBER}.tar.gz --directory ${PROJECT_DIRECTORY}'
        sh 'rm ${PROJECT_DIRECTORY}${JOB_NAME}-build-${BUILD_NUMBER}.tar.gz'
      }
    }
    stage('Execute') {
      steps {
        sh 'pm2 startOrRestart ${PROJECT_DIRECTORY}ecosystem.config.js'
        sh 'pm2 save'
      }
    }
  }
}
