function getBotResponse(input) {
    //quesstion and answer
    if (input == "what is the eligibility for mca") {
        return "the applicant should score alteast 70%";
    } else if (input == "how do i apply for mca program") {
        return "you need a bachelor's degree in relevant field with minimum of 70% ";
    } else if (input == "When is the application deadline for the MCA program") {
        return "The application deadline for the upcoming MCA program intake is 18-aug-2023.";
    }
 else if (input == "Is there an interview as part of the admission process") {
        return " Yes, shortlisted candidates will be invited for an interview, which can be conducted in-person or online.";
    }
else if (input == "how can i track the status of my application") {
        return " You can log in to your application portal to track the progress of your application.";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}