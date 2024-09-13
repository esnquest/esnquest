const firebaseConfig = {
  apiKey: "AIzaSyCN6iRgRuSKeItO_1A-CUSpQtuW-oIo-XI",
  authDomain: "esnpartyquest.firebaseapp.com",
  projectId: "esnpartyquest",
  databaseURL: "https://esnpartyquest-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "esnpartyquest.appspot.com",
  messagingSenderId: "252294601053",
  appId: "1:252294601053:web:e0a58c307be112ed37b0b4",
  measurementId: "G-EW09G1MDDZ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const database = firebase.database();

const botToken = '7269261799:AAHGjNywk0GmQKXeZu4sUO9myMoQ9_jrSUM'; // Replace with your actual bot token
const chatId = '693835702'; // Replace with your actual chat ID

// Sample database of names and tasks
const tasksDatabase = {
"abe anastasia": "During a conversation with Chloé Dau use emojis verbally (\"hmmm laughing face ahah\")",
"adato almog": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
"albrecht marie": "Ask Céline Kalbermatten how much alcool you need to drink to be taken to the hospital",
"alves mariana": "Ask Alistair Hay to list three things he loves about his job.",
"andersson robert": "Get Lucie Zhou to give you a taste of what she is preparing for tomorrow.",
"baldassarre bianca": "Ask her what would be her perfect lover",
"baran dilara": "Have a picture taken of you taking a picture of Quentin Devaud.",
"lavings carly": "Ask Audrey Adehossi how much alcool you need to to drink to be taken to the hospital",
"bartůněk jakub": "Ask Arthur Speich to give you a piggyback ride for a few steps (safely and with consent).",
"pfander mila": "Whish a happy 30 yearbirth to Colin Hafen",
"bessö erik": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
"bjaaland gabriella": "Get Mara Blöchlinger to give you a taste of what she is preparing for tomorrow.",
"bjørsvik ben rené": "Make a proposal to Aline Marcionetti-Rusconi.",
"boosten martha": "Get Jonathan Zurbriggen to do a L on his forehead with you.",
"borup jeppesen caroline": "Get Cyril Udriot to mix one song of his liking. It has to be drum&bass.",
"bosch matheu neus": "Make a proposal to Aline Marcionetti-Rusconi.",
"broegger jensen katrine": "Draw a few boxes on Tom Rathjens's t-shirt",
"buchner julia": "Steal the hat/cap of Thomas Bonnet.",
"bugge knut": "Write 'Sarah > Blanche' on Blanche Roquejeoffre's white shirt.",
"engel mitchell": "Have a picture taken of you taking a picture of Quentin Devaud.",
"carrier philippe": "Have a picture taken of you taking a picture of Quentin Devaud.",
"cautaerts vincent": "Steal the hat/cap of Thomas Bonnet.",
"agrawal mayur": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"zhou eric": "Challenge Augustin Henry to a push-up contest.",
"de koker jef": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
"de voghel valentine": "Get Tringa Xuhli to say : \"I got scabbi in Australia\" in albanian",
"grabowski maciek": "Ask Yann Boudigou to show you their best trick shot on beer pong.",
"dorsel justus": "Draw a nice vito on Aymeric Rio's t-shirt",
"dries timon": "Steal the hat/cap of Thomas Bonnet.",
"fedai zuhal": "Make a proposal to Aline Marcionetti-Rusconi.",
"gardette rémi": "Write 'Blanche > Sarah' on Sarah Bruno's white shirt.",
"gardeyn elise": "Steal the hat/cap of Thomas Bonnet.",
"ghita sabina": "Explain to Lilou Castano for five minutes why capitalism is the best society model possible.",
"salel marina": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
"grahn lovisa": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
"halloy pauline": "Steal the hat/cap of Thomas Bonnet.",
"hebenstreit nick": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
"hedman pontus": "During a conversation casually and offhandedly mention to Maxime Kaiser that you shat your pants",
"hemingway morgane": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"heule lucas": "Make a proposal to Aline Marcionetti-Rusconi.",
"holzwarth hendrik": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
"hüning maria carolina": "Ask Emilien Ordonneau to share a funny nickname he had and take a picture with him.",
"huyse janosh": "Make a proposal to Aline Marcionetti-Rusconi.",
"iencenella alessandro": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
"jawor bartłomiej": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"johri asmita": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"jonczyk alicja": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
"el mouttaki touria": "Ask Gauthier Ordonneau to play a round of shi-fu-shot with you. Best out of three wins, the loser has to take a shot.",
"kjellsson viktor": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"kleszcz marcin": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"olyslaegers pieter": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"danielsson isabel": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"langeler dana": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"larsson john": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"de limburg stirum ferdinand": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"evsjukov alexander": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"lingström carl": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"linuesa domenech laura": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"liou hsin ju": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"løfqvist marius": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"lopez dulce": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"mac giolla phádraig ruadhán": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"anis nadim": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"mathiot paul": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"missaghian neshon": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"molzen anders eiersted": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"mueller sebastian": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"olaru théodore": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"oldgren eric": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"olsson josefin": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"popescu alyssa": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"probst gabriel": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"puerto-lichtenberg amanda": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"racine jeremy": "Ask Noah Trippens if you can change your activity for tomorrow (but don’t do it for real please. Pretty please).",
"martín palma laura": "Challenge Cyril Udriot to a thumb wrestling match and let someone capture it on video.",
"rizk joe": "Ask Quentin Devaud about the most adventurous thing they’ve ever done and share it with someone new.",
"safta cristian": "Challenge Aymeric Rio to a game of tic-tac-toe on your shirt.",
"schoele johanna": "Get Yann Boudigou to tell a story using only sound effects.",
"seidel nina": "Have a staring contest with Thomas de Masi for at least 20 seconds.",
"shahi aditya narayan": "Get Clara Gloge to participate in a 15-second dance battle with you.",
"shetty rohan": "Get Simon Desmaison to show you how to do a cool handshake.",
"simon alexine": "Challenge Yann Savioz to make the funniest animal noise they can.",
"soenen manon": "Ask Celeste Paquin to tell you a fun fact about themselves that no one else knows.",
"von querfurth benedikt": "Convince Sarah Bruno to help you serenade a random participant with a love song.",
"statkiewicz grzegorz": "Get Lucie Zhou to share an embarrassing story about themselves.",
"svalstedt viktor": "Get Mateo Tatzber to do a TikTok dance with you and record it.",
"swanepoel amica": "Ask Mara Blöchlinger to show you a hidden talent or party trick.",
"tasseel raphael": "Get Gauthier Ordonneau to help you create a funny meme, send it to the chat group on telegram.",
"topf amelie": "Get Maxime Kaiser to join you in making up a short song about the party.",
"tuominen valtteri": "Find Noah Trippant and ask them to draw a quick portrait of you.",
"van de walle jolien": "Find Aymeric Rio and ask them to do a silly face with you in a selfie.",
"van hooff bradley": "Convince Mara Blöchlinger to create a secret handshake with you.",
"vignaux niels": "Get Emilien Ordonneau to join you in making up a short song about the party.",
"volmich mona": "Ask Colin Hafen to show you a hidden talent or party trick.",
"von heyl cordula": "Get Gauthier Ordonneau to participate in a 15-second dance battle with you.",
"weber david": "Get Aymeric Rio to tell a story using only sound effects.",
"wendler sven": "Get Herald Nakpil to share an embarrassing story about themselves.",
"wimmelmann clara": "Get Audrey Adehossi to show you how to do a cool handshake.",
"xiang xiao": "Challenge Cyril Udriot to make the funniest animal noise they can.",
"herald nakpil": "Get Aymeric Rio to show you how to do a cool handshake.",
"thomas de masi": "Find Alistair Hay and ask them to draw a quick portrait of you.",
"yann boudigou": "Challenge Quentin Devaud to a game of tic-tac-toe on your shirt.",
"arthur speich": "Ask Mateo Tatzber about the most adventurous thing they’ve ever done and share it with someone new.",
"quentin devaud": "Convince Cyril Udriot to help you serenade a random participant with a love song.",
"augustin henry": "Get Lilou Castano to tell a story using only sound effects.",
"tahiry arintsoa": "Get Celeste Paquin to do a TikTok dance with you and record it.",
"yann savioz": "Ask Augustin Henry to show you a hidden talent or party trick.",
"heloise fabbretti": "Find Itaï Yerly and ask them to draw a quick portrait of you.",
"celeste paquin": "Get Timur Unver to help you create a funny meme, send it to the chat group on telegram.",
"adrien feillard": "Ask Audrey Adehossi to show you a hidden talent or party trick.",
"itaï yerly": "Get Lucie Zhou to tell a story using only sound effects.",
"cyril udriot": "Get Adrien Feillard to participate in a 15-second dance battle with you.",
"audrey adehossi": "Ask Tringa Xuhli about the most adventurous thing they’ve ever done and share it with someone new.",
"oriane petit-phar": "Have a staring contest with Jonathan Zurbriggen for at least 20 seconds.",
"céline kalbermatten": "Ask Thomas Bonnet to show you a hidden talent or party trick.",
"chloé dau": "Find Tim Lücking and ask them to do a silly face with you in a selfie.",
"tim lücking": "Get Mara Blöchlinger to do a TikTok dance with you and record it.",
"emilien ordonneau": "Convince Lucca Duarte Borges Ribeiro to create a secret handshake with you.",
"lucie zhou": "Find Yann Boudigou and ask them to do a silly face with you in a selfie.",
"mara blöchlinger": "Get Yann Savioz to show you how to do a cool handshake.",
"ines acevedo": "Find Timur Unver and ask them to do a silly face with you in a selfie.",
"colin hafen": "Convince Tom Rathjens to create a secret handshake with you.",
"luc lücking": "Find Oriane Petit-Phar and ask them to draw a quick portrait of you.",
"clara gloge": "Convince Herald Nakpil to help you serenade a random participant with a love song.",
"noah trippant": "Get Colin Hafen to participate in a 15-second dance battle with you.",
"aymeric rio": "Ask Blanche Roquejeoffre to show you a hidden talent or party trick.",
"tom rathjens": "Ask Augustin Henry to show you a hidden talent or party trick.",
"sarah bruno": "Find Quentin Devaud and ask them to draw a quick portrait of you.",
"blanche roquejeoffre": "Get Quentin Devaud to help you create a funny meme, send it to the chat group on telegram.",
"lilou castano": "Get Céline Kalbermatten to show you how to do a cool handshake.",
"maxime kaiser": "Have a staring contest with Chloé Dau for at least 20 seconds.",
"gauthier ordonneau": "Ask Maxime Kaiser to show you a hidden talent or party trick.",
"mateo tatzber": "Ask Ines Acevedo to show you a hidden talent or party trick.",
"jonathan zurbriggen": "Get Arthur Speich to participate in a 15-second dance battle with you.",
"timur unver": "Convince Lucie Zhou to create a secret handshake with you.",
"simon desmaison": "Challenge Colin Hafen to a game of tic-tac-toe on your shirt.",
"tringa xuhli": "Get Gauthier Ordonneau to do a TikTok dance with you and record it.",
"lucca duarte borges ribeiro": "Get Alistair Hay to participate in a 15-second dance battle with you.",
"alistair hay": "Ask Heloise who kisses better, Tahiry, Roxanna or Ines.",
"thomas bonnet": "Hug Jonathan Zurbriggen and take a picture of it.",    }

function submitProof() {
    const fileInput = document.getElementById("proofFile");
    const description = document.getElementById("proofDescription").value;
    const uploadResult = document.getElementById("uploadResult");
    const participantName = document.getElementById("nameInput").value.trim();
    const proofUploadForm = document.getElementById("proofUpload");


    if (fileInput.files.length === 0) {
        uploadResult.textContent = "Error: No file selected. Quest proof required.";
        return;
    }

    if (!participantName) {
        uploadResult.textContent = "Error: Please enter your name before submitting.";
        return;
    }

    const file = fileInput.files[0];
    const fileExtension = file.name.split('.').pop();
    const fileName = `${participantName}_${Date.now()}.${fileExtension}`;

    // Create a reference to 'quest_proofs/FILENAME.jpg'
    const storageRef = storage.ref('quest_proofs/' + fileName);

    uploadResult.textContent = "Uploading quest proof...";

    // Upload the file
    storageRef.put(file).then((snapshot) => {
        console.log('Uploaded a file!');
        // Get the download URL
        return snapshot.ref.getDownloadURL();
    }).then((downloadURL) => {
        console.log('File available at', downloadURL);
        // Here you could save the downloadURL and description to a database if needed
        uploadResult.textContent = `Quest proof received. File "${fileName}" successfully uploaded. Awaiting verification.`;
        
        // Save metadata to Realtime Database
        const metadataRef = database.ref('quest_proofs').push();
        return metadataRef.set({
            participantName: participantName,
            description: description,
            fileUrl: downloadURL,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
    }).then(() => {
        proofUploadForm.style.display = "none";

        uploadResult.textContent = `Quest proof received. File "${fileName}" successfully uploaded. We'll contact you on Telegram as soon as your proof has been reviewed.`;
        
        sendTelegramNotification(`Proof uploaded by ${participantName}. Description: ${description}`);

        // Clear the form
        fileInput.value = "";
        document.getElementById("proofDescription").value = "";
    }).catch((error) => {
        console.error('Upload failed', error);
        uploadResult.textContent = "Error: Upload failed. Please try again.";
    });
}


function typeWriter(text, elementId, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
}
  
document.addEventListener('DOMContentLoaded', function() {
    
    const rules = [
      "Rule #1: Do not talk about the Quest.",
      "Rule #2: Do not talk about the Quest.",
      "Rule #3: Do not talk about the Quest."
    ];
    
    rules.forEach((rule, index) => {
      setTimeout(() => {
        typeWriter(rule, `rule${index + 1}`, 25);
      }, index * 1500);
    });
});

function updateFileName() {
    const fileInput = document.getElementById('proofFile');
    const fileNameDisplay = document.getElementById('file-name-display');
    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = `Selected file: ${fileInput.files[0].name}`;
    } else {
        fileNameDisplay.textContent = '';
    }
}


  // Function to find the closest matching name
function findClosestName(input) {
    let closestName = '';
    let minDistance = Infinity;

    for (let name in tasksDatabase) {
        const distance = levenshteinDistance(input.toLowerCase(), name.toLowerCase());
        if (distance < minDistance) {
            minDistance = distance;
            closestName = name;
        }
    }

    // Only suggest if the name is close enough
    return minDistance <= 3 ? closestName : '';
}

// Levenshtein distance function (keep this as it was before)
function levenshteinDistance(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

// Modified checkName function
function checkName() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    const taskResult = document.getElementById("taskResult");
    
    taskResult.textContent = "Accessing database...";
    
    setTimeout(() => {
        if (name.toLowerCase() in tasksDatabase) {
            const task = tasksDatabase[name.toLowerCase()];
            taskResult.textContent = "";
            typeWriter(`Your Quest: ${task}`, "taskResult", 30);
            showProofUploadForm(); // Show the upload form when a valid name is entered

            sendTelegramNotification(`Task retrieved by ${name}: ${task}`);
        } else {
            const closestName = findClosestName(name.toLowerCase());
            if (closestName) {
                taskResult.innerHTML = `Name not found. Did you mean <a href="#" onclick="useThisName('${closestName}')">${closestName}</a>?`;
            } else {
                taskResult.textContent = "Error: Name not found in database. Access denied.";
            }
            proofUpload.style.display = "none";
        }
    }, 1500);
}

function useThisName(name) {
    document.getElementById("nameInput").value = name;
    checkName();
}

function sendTelegramNotification(message) {
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      }),
    })
    .then(response => response.json())
    .then(data => console.log('Telegram notification sent:', data))
    .catch((error) => console.error('Error sending Telegram notification:', error));
}

function showProofUploadForm() {
    const proofUploadForm = document.getElementById("proofUpload");
    const uploadResult = document.getElementById("uploadResult");
    
    proofUploadForm.style.display = "block";
    uploadResult.textContent = ""; // Clear any previous messages
} 