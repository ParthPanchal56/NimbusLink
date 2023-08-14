const nodeMailer = require('nodemailer');
const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const oauthLink = "https://developers.google.com/oauthplayground";
const { EMAIL, MAILING_ID, MAILING_SECRET, MAILING_REFRESH_TOKEN, MAILING_ACCESS_TOKEN } = process.env;

const auth = new OAuth2(
    MAILING_ID,
    MAILING_SECRET,
    MAILING_REFRESH_TOKEN,
    oauthLink
);

exports.sendVerificationEmail = (email, name, subject, purpose, description, emailVerficationToken) => {
    auth.setCredentials({
        refresh_token: MAILING_REFRESH_TOKEN,
    });

    const accessToken = auth.getAccessToken();
    const smtpTransport = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: EMAIL,
            clientId: MAILING_ID,
            clientSecret: MAILING_SECRET,
            refreshToken: MAILING_REFRESH_TOKEN,
            accessToken
        }
    });

    const logo =
        "https://media-private.canva.com/TyrAU/MAFlvjTyrAU/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230621%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230621T024145Z&X-Amz-Expires=18954&X-Amz-Signature=ad55ffa2e29f4fb344cc72658ff96ecef8e364b8627e9a46e6d6a5dae7a62bc2&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2021%20Jun%202023%2007%3A57%3A39%20GMT";
    const profileImage = "https://drive.google.com/file/d/13rlv75MJwm8Y4aFbga2QZoq41qyMYzOj/view?usp=drive_link";

    const mailOptions = {
        from: EMAIL,
        to: email,
        subject: `NimbusLink - ${subject}`,
        html: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5; padding: 20px;">
    <div style="background-color: #fff; padding: 20px; border-radius: 10px;">
        <img src=${logo} alt="logo" style="display: block; margin: 0 auto; width: 100px; height: 100px;">
        <h2 style="text-align: center; color: #1da1f2;">${subject}</h2>
        <img src=${profileImage} alt="Profile Image"
            style="display: block; margin: 0 auto; width: 100px; height: 100px;">
        <h4 style="text-align: center;">Hi ${name},</h4>
        <h6 style="text-align: center;">${description}
        </h6>
        <p style="text-align: center;">${purpose}
        </p>


        <h3 style="text-align: center; color: #1da1f5;">OTP</h3>
        <h1 style="text-align: center; color: #1da1f2;">${emailVerficationToken}</h1>
        <p style="text-align: center;">If you have any questions, please reply to this email. We're always happy to
        help!</p>
        <p style="text-align: center;">Thanks,</p>
        <p style="text-align: center;">The NimbusLink Team</p>
    </div>
    
</div>
</div>
`
    };
    smtpTransport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    }
    );

}