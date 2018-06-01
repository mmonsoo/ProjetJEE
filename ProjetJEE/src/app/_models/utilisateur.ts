// Le export permet d'utiliser la class en dehors du fichier
export class Utilisateur {
    // On peut mettre des paramètres par défaut
    static count = 0;
    id: number;
    nom: string;
    prenom: string;
    login: string;
    password: string;
    constructor(tmpNom: string, tmpPrenom: string, tmpLogin: string, tmpPassword: string) {
        this.id = Utilisateur.count++;
        this.nom = tmpNom;
        this.prenom = tmpPrenom;
        this.login = tmpLogin;
        this.password = tmpPassword;
    }
}
