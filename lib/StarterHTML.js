class StarterHTML {
    constructor() {
    }

     getStarterCode() {
         let html = 
         `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My Team</title>
                <!-- Bootstrap CSS -->
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
                    crossorigin="anonymous"
                />
                <!-- FontAwesome -->
                <script
                    src="https://kit.fontawesome.com/e73503f66f.js"
                    crossorigin="anonymous"
                ></script>
                <!-- Style CSS -->
                <link href="style.css" type="text/css" rel="stylesheet" />
            </head>
            <body>
            <header class="container-fluid text-center">
                <h1>My Team</h1>
            </header>

            <main class="container">
            <div class="row justify-content-center">
         `

         return html;
     }
}

module.exports = StarterHTML;