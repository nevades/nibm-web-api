# nibm-web-api
NIB304CEM - Web API Development
Coursework – RESTful API with client
REST Web API Development

Business Case:
The Sri Lankan Department of Meteorology offers a map of the country's weather updated every
three hours. You can access the map at
https://www.meteo.gov.lk/index.php?option=com_content&view=article&id=102&Itemid=360
&lang=en.

They need to modify the current setup by upgrading it to a real-time map with the following
metrics;
a. Temperature
b. Humidity
c. Air Pressure

These metrics are collected from an island-wide fleet of IoT weather stations. You can estimate
the number of weather stations needed based on the diverse weather patterns across our country's
geo-mapped regions. For our purposes, we will have a single weather station in each
administrative district, programmed to emit one data point every five (05) minutes.

Task:
A software engineering firm has hired you to create a modern single-page application with a
REST Web API to enable data sharing and meet business needs.
Deliverables: What you need to deliver for the evaluation.
1. Project Report: Formal documentation of the project development. Should include the
following;
a. Business Analysis Report: Include formal requirements and corresponding UML
sequence diagrams.
b. Design Methodology, System Architecture, Deployment Details of the solution.
c. Limitations, Scaling and Further Concerns.
2. Weather REST API: A Restful API developed according to the standards thought in the
module.
3. Live Map SPA: Single Page Application with a client to consume the Weather API.
4. Data Generators: Employ generated data for the presentation.
5. Presentation Video Report: A YouTube video presentation with comprehensive
coverage of the work.

Assessment: You will be evaluated based on the following criteria, with varying weights
assigned to each;
1. API Design: Do you meet the REST API guidelines for your API design? To ensure
higher grades, make sure that your data structures comply with the JSON-API standards.
2. Security: Is your API secure and only provides authorized users access for required
routes?
3. API Calls: Your SPA will call your REST API and will be assessed on their secure
implementation. Higher grades require advanced API design features and security.
4. DOM: Your SPA must contain navigation code that manipulates the DOM to change page
content. Interaction level is assessed.
5. Data: Is all the necessary data stored in a MySQL database? Have you moved this to the
cloud for the live API? You need to create and develop an interface between the database
and the rest of your code to achieve higher grades.
6. Functionality: Does the solution perform all its supposed functions? The more features
you successfully demonstrate, the higher your grade will be.
7. Innovations: Any innovation or creativity that aligns with the module's thoughts is
encouraged and credited accordingly. (HINT: Concerns about historical data at the API
design stage.)

Technologies & Tooling:
1. Code Versioning and Repository: GitHub
2. API Design: Swagger
3. Programming: Nodejs / EC6+
4. Project hosting API: Heroku or any other appropriate place.
5. Cloud: AWS, Azure, Oracle Cloud.
6. Any other tools & technologies discussed in class and deem appropriate.
