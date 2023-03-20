import swaggerAutogen  from'swagger-autogen';

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/analysis-routes.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js')
})