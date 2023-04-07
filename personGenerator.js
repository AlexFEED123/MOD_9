
const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    fatherNameFeJson:`{
        "count" : 5,
        "list": {
            "id_1": "Александровна",
            "id_2": "Васильевна",
            "id_3": "Сергеевна",
            "id_4": "Петровна",
            "id_5": "Олеговна"
        }
    }`,

    fatherNameJson:`{
        "count" : 5,
        "list": {
            "id_1": "Александрович",
            "id_2": "Васильевич",
            "id_3": "Сергеевич",
            "id_4": "Павлович",
            "id_5": "Олегович"
        }
    }`,

    professionFeJson:`{
        "count" : 5,
        "list": {
            "id_1": "Психиатр",
            "id_2": "Визажист",
            "id_3": "Балерина",
            "id_4": "Преподаватель",
            "id_5": "Повар"
        }
    }`,

    professionJson:`{
        "count" :5,
        "list":{
            "id_1": "Шахтёр",
            "id_2": "Слесарь",
            "id_3": "Грузчик",
            "id_4": "Стамотолог",
            "id_5": "Окулист"
        }
    }`,

   
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
            
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list":{
            "id_1": "Александра",
            "id_2": "Маргарита",
            "id_3": "София",
            "id_4": "Агата",
            "id_5": "Елена",
            "id_6": "Наталья",
            "id_7": "Виктория",
            "id_8": "Дарья",
            "id_9": "Ева",
            "id_10": "Оксана"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  
        return obj.list[prop];
        
    },

    randomGender: function (){
         var as = (this.randomIntNumber()>0)? this.GENDER_FEMALE: this.GENDER_MALE;
           return as;
  },
    randomFirstName: function () {
        if(this['person']['gender']==='Женщина'){
           let res = this.randomValue(this.firstNameFemaleJson);
        return res ;
        }else {
            return this.randomValue(this.firstNameMaleJson);
        };

    },


     randomSurname: function() {
        if(this['person']['gender']==='Женщина'){
            return `${this.randomValue(this.surnameJson)}а`;
        }else{
        return this.randomValue(this.surnameJson);
        }
    },


    randomFatherName: function(){
        if(this['person']['gender']==='Женщина'){
            return this.randomValue(this.fatherNameFeJson);
    }else{
        return this.randomValue(this.fatherNameJson);
        }
    },

    randomBirthYear: function(){
        return this.randomIntNumber(2005, 1970)
    },

    randomProf : function(){
        if(this['person']['gender']==='Женщина'){
            return this.randomValue(this.professionFeJson);
        }else{
            return this.randomValue(this.professionJson);
        }

    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        this.person.profession = this.randomProf();
        this.person.fatherName = this.randomFatherName();
        return this.person;
    }
};
