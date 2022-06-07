import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "fedccbe526fcf3",
    pass: "66f1df4acdb91e"
  }
});

export  class NodemailerMailAdapter implements MailAdapter{
  async sendMail({body,subject} : SendMailData){
     await transport.sendMail({
    from : 'Equipe Feedget <oi@feedget.com>',
    to: `Diego Fernandes <kevenmario.n.r@gmail.com`,
    subject,
    html : body
  })
  }
}