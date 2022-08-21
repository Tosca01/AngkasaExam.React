export enum JenisKelamin {
    LakiLaki = "L",
    Perempuan = "P"
}

export default class Murid {
    id:number;
    nis:string;
    nisn:string;
    nama?:string;
    jenis_kelamin?:JenisKelamin;
    tempat_lahir?:string;
    tanggal_lahir?:string;
    telp?:string;
    foto?:string;

    constructor(id:number, nis:string, nisn:string) {
        this.id = id;
        this.nis = nis;
        this.nisn = nisn;
    }
}