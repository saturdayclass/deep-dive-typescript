const today = new Date();
today.getMonth();

const person = {
  age: 20,
};

class Color {}

const red = new Color();

/* Typescript mempunyai 2 type, yaitu annotation dan inference.
Type Annotation, seperti namanya annotations dalam bahasa indonesia artinya Penjelasan. 
jadi dalam typescript ketika kita memberikan sebuah type dalam variable, function maupun parameter itu kita sebut sebagai type annotations.

Kemudian untuk type inference, dia seperti proses di belakang layar dari type annotation. Dimana ketika kita sudah memberikan type pada sebuah variable ataupun function kemudian menghapus typenya. Variable tsb masih akan membaca type yang sebelumnya sudah kita berikan. 
Dengan Catatan :
- jika memberikan type pada sebuah ariable, maka variable dengan nilainya harus dalam satu baris. Jika tidak typescript akan memberikan any type kepada variable tsb.


Kapan kita harus menggunakan Type Annotations?
1. Ketika sebuah function me-return any type dan kita perlu mengklarifikasi nilai dari return tsb
2. Ketika kita mendeklrasikan variable dan menginisialisasi di line code yang berbeda.
3. ketika kita ingin variabel memiliki tipe yang tidak bisa atau jelaskan

Kapan kita menggunakan Type inference?
1. Selalu, karena memang type inference ini selalu berjalan ketika memdeklarasikan sebuah type pada variable, function dll.

*/
