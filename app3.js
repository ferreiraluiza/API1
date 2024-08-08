// Objeto 'musica' que armazena informações sobre uma música específica
let musica = {
    nome: 'crazy in love',   // Nome da música
    cantor: 'beyoncé',       // Nome do cantor
    ano: '2003',             // Ano de lançamento
    album: 'dengerosly in love', // Nome do álbum
    estilo: 'r&b'           // Gênero musical
}

// Exibe o objeto 'musica' no console
console.log(musica);

// Função construtora para criar novos objetos do tipo 'musiquinha'
function musiquinha(nome, cantor, ano, album, estilo) {
    this.nome = nome;         // Define a propriedade 'nome'
    this.cantor = cantor;     // Define a propriedade 'cantor'
    this.ano = ano;           // Define a propriedade 'ano'
    this.album = album;       // Define a propriedade 'album'
    this.estilo = estilo;     // Define a propriedade 'estilo'
}

// Criação de várias instâncias do objeto 'musiquinha' com diferentes valores
const music = new musiquinha ('CHIHIRO', 'Billie Elish', '2024', 'HIT ME HARD AND SOFT', 'pop');
const music3 = new musiquinha ('the boy is mine', 'Ariana Grande', '2024', 'eternal sunshine', 'pop');
const music4 = new musiquinha ('LUNCH', 'Billie Elish', '2024', 'HIT ME HARD AND SOFT', 'pop');
const music5 = new musiquinha ('true story', 'Ariana Grande', '2024', 'eternal sunshine', 'pop');
const music6 = new musiquinha ('TYRANT', 'beyoncé', '2024', 'COWBOY CARTER', 'Country');
const music7 = new musiquinha ('BLACKBIRD', 'beyoncé', '2024', 'COWBOY CARTER', 'Country');
const music8 = new musiquinha ('perfume', 'kweller', '2022', 'CONTRA', 'putaria song');
const music9 = new musiquinha ('coisas que me lembram de você', 'kweller', '2024', '3 contra 1', 'putaria song');
const music10 = new musiquinha ('simples decote', 'gapes', '2024', '', 'putaria song');

// Adiciona uma nova propriedade 'cantor_secun' ao objeto 'music8'
music8.cantor_secun = 'enzo cello';

// Remove a propriedade 'cantor_secun' do objeto 'music8'
delete music8.cantor_secun;

// Exibe o objeto 'music8' no console após a remoção da propriedade
console.log(music8);

// Loop que itera sobre as propriedades do objeto 'music8' e exibe cada uma delas no console
for (let propriedade in music8) {
    console.log(`${propriedade}: ${music8[propriedade]}`);
}
