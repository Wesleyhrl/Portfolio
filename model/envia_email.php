<?php
require "./lib/Exception.php";
require "./lib/OAuthTokenProvider.php";
require "./lib/OAuth.php";
require "./lib/PHPMailer.php";
require "./lib/POP3.php";
require "./lib/SMTP.php";


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class Email{
    private $email;
    private $nome;
    private $mensagem;

    public function __get($atributo){
        return $this->$atributo;
    }
    public function __set($atributo,$valor){
        return $this->$atributo = strtolower($valor);
    }
    public function validar(){
        if(empty($this->email) ||empty($this->nome) ||empty($this->mensagem)){
            return false;
        }else if(!str_contains($this->email,".com") || !str_contains($this->email,"@")){
            return false;
        }else{
            return true;
        }
    }
}
$email = new Email();
$email->__set("email",$_POST["email"]);
$email->__set("nome",$_POST["nome"]);
$email->__set("mensagem",$_POST["mensagem"]);

if(!$email->validar()){
    header("Location: ../index.html?email=erro&cod=1");
    die();
}
$mail = new PHPMailer(true);
try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = '';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = '';                     //SMTP username
    $mail->Password   = '';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($email->__get("email"), $email->__get("nome"));
    $mail->addAddress('', '');     //Add a recipient
    $mail->addAddress('');               //Name is optional
    //$mail->addReplyTo();
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = "Email enviado Via Portfolio por {$email->__get('nome')}";
    $mail->Body    = "Nome: {$email->__get('nome')}<br/> Email: {$email->__get('email')}<br/> {$email->__get('mensagem')}";
    $mail->AltBody = "Nome: {$email->__get('nome')} | Email: {$email->__get('email')} | Mensagem: {$email->__get('mensagem')}";

    $mail->send();
    header("Location: ../index.html?email=ok");
} catch (Exception $e) {
    header("Location: ../index.html?email=erro&cod=2");
}

?>