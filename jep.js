/* jep.js - JavaScript Email Protection (JEP) */

function jep_link(domain, user) {
    // Create email string
    let email = `${user}@${domain}`;
    
    // Obfuscate each character using HTML entity codes
    let encodedEmail = "";
    let encode = str => [...str].map(c => `&#${c.charCodeAt(0)};`).join('');

    // Insert the obfuscated email link into the DOM
    document.write(`<a href="${encode(mailto)}">${encode(email)}</a>`);
}
