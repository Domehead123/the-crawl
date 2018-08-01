function sendMail(contactForm) {
    emailjs.send("gmail", "thecrawl", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            $("input[type=text], textarea").val("");
            console.log("SUCCESS", response);
            $(".thanks").text("Thanks for contacting me. I'll be in touch.");
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}