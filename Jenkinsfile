#!groovy

@Library('blockr-jenkins-lib') _

String repo = 'blockr-public-api'

Map settings = [
    sonar_key: 'blockr-public-api',
    source_folder: 'src/',
    archive_folders: ['dist/']
]

tsBuildAndPublish(repo, settings)