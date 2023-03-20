const express = require('express');
const  analysisRoutes = require('./routes/analysis-routes');
const cors = require('cors');
const swaggerUi = require( 'swagger-ui-express');
const  swaggerFile = require('./swagger_output.json');

const app = new express();

app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/analysis', analysisRoutes);

app.listen(3000, () => {console.log('app started on port 3000')});
