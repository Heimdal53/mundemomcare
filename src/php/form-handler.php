<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini al
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Verilerin boş olup olmadığını kontrol et
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Mail gönderme işlemi
        $to = "erendcexample@gmail.com"; // Buraya kendi email adresinizi yazın
        $subject = "Yeni İletişim Formu Mesajı";
        $body = "İsim: $name\nEmail: $email\nMesaj: $message";
        $headers = "From: $email";

        // Mail gönderme
        if (mail($to, $subject, $body, $headers)) {
            echo "Mesajınız başarıyla gönderildi.";
        } else {
            echo "Mesaj gönderiminde bir hata oluştu.";
        }
    } else {
        echo "Lütfen tüm alanları doldurun.";
    }
} else {
    echo "Geçersiz istek.";
}
?>
