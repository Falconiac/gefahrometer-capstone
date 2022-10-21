FROM openjdk:17

LABEL maintainer="test@neuefische.de"

ADD backend/target/app.jar app.jar

CMD ["sh", "-c", "java -DServer.port=$PORT -jar /app.jar"]