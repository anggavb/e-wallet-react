FROM ubuntu:resolute

RUN apt update && apt install openssh-server -y

RUN useradd -m -s /bin/bash angga
RUN mkdir -p /home/angga/.ssh
RUN chmod 700 /home/angga/.ssh

COPY id_rsa.pub /home/angga/.ssh/authorized_keys

RUN chown -R angga:angga /home/angga/.ssh
RUN chmod 600 /home/angga/.ssh/authorized_keys

RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin no/' /etc/ssh/sshd_config
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
RUN sed -i 's/PubkeyAuthentication no/PubkeyAuthentication yes/' /etc/ssh/sshd_config

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]
