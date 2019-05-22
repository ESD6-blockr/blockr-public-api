#!groovy

@Library('blockr-jenkins-lib') _

String repo = 'blockr-public-api'

Map settings = [
    sonar_key: 'blockr-public-api',
    source_folder: 'src/',
    sonar_exclusions: 'src/main.ts,src/app.ts,src/**/index.ts,src/middleware/**/*,src/routers/**/*,src/injection/**/*,**/__tests__/**/*',
    archive_folders: ['dist/'],
    skip_tests: false
]

tsBuildAndPublish(repo, settings)