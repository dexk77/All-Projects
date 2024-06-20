const nodemailer=require("nodemailer")



 // create.transport responsible for sendingthe mails
 // takes two arguments  service and auth(user:,password:)
 let mailTransporter = nodemailer.createTransport({
    port: 587,
    secure: false, // true for 465, false for other ports
    host: "smtp.gmail.com", // Use Gmail's IPv4 address
    auth: {
        user: "deepkadam3208@gmail.com",
        pass: "yqxpgdixfivhakpi"
    }
});

let details={
    from:"deepkadam3208@gmail.com",
    to:"aravindsagar.mail@gmail.com",
    subject: "FREE FREE FREE",
    text:` mast hai bhai

     
    `,
    

}

mailTransporter.sendMail(details,(err)=>{
if(err){

    console.log("email  not sent",err)
}
else{
    console.log("email sent")
}

})




