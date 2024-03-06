#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node-20.11.0-chrome-121.0.6167.184-1-ff-123.0-edge-121.0.2277.128-1
#Create the folder where our project will be stored
RUN mkdir /cypressAutomationCucumberPOM
#We make it our workdirectory
WORKDIR /cypressAutomationCucumberPOM
#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cucumber-html-report.js .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm install
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx","cypress","run"]
#With CMD in this case, we can specify more parameters to the last entrypoint.
CMD [""]    



