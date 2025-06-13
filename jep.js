function jep_link(domain, user) {
    const email = `${user}@${domain}`;
    const mailto = `mailto:${email}`;

    const encode = str => [...str].map(c => `&#${c.charCodeAt(0)};`).join('');

    const a = document.createElement("a");
    a.setAttribute("href", encode(mailto));
    a.innerHTML = encode(email);

    // Append to a target container (like the calling script's parent)
    const scriptEl = document.currentScript;
    scriptEl.parentNode.insertBefore(a, scriptEl.nextSibling);
}
