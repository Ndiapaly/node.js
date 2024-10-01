const generatePassword = require("generate-password");

function generateRandomPassword(options = {}) {
  try {
    const defaultOptions = {
      length: 12,
      numbers: true,
      symbols: true,
      uppercase: true,
      lowercase: true,
    };
    const mergedOptions = { ...defaultOptions, ...options };

    const password = generatePassword.generate(mergedOptions);
    return password;
  } catch (error) {
    console.error("Erreur lors de la génération du mot de passe :", error);
    return null;
  }
}

// Utilisation :
const password = generateRandomPassword({
  length: 16,
  excludeSimilarCharacters: true,
});
if (password) {
  console.log("Mot de passe généré :", password);
  // Utiliser le mot de passe pour l'enregistrement d'un utilisateur, etc.
}
