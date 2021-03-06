FROM ubuntu:latest

RUN apt-get update 
RUN apt-get install -y python3-pip

RUN pip install flask

COPY app.py /app.py

EXPOSE 8111
CMD ["python3","app.py"]