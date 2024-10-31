const allTypes = [
    "normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison",
    "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark",
    "steel", "fairy"
];

// 타입의 영문 이름과 한글 이름 매핑
const typeNamesKorean = {
    "normal": "노멀", "fire": "불꽃", "water": "물", "electric": "전기",
    "grass": "풀", "ice": "얼음", "fighting": "격투", "poison": "독",
    "ground": "땅", "flying": "비행", "psychic": "에스퍼", "bug": "벌레",
    "rock": "바위", "ghost": "고스트", "dragon": "드래곤", "dark": "악",
    "steel": "강철", "fairy": "페어리"
};

export async function typeRelation(types){
    const effectiveness = new Map();
    allTypes.forEach((type)=>{effectiveness[type] = 1});

    for(const type of types){
        const typeInfo = await getTypeInfo(type);
        const relations = typeInfo.damage_relations;
        relations.double_damage_from.map((item)=>{ effectiveness[item] *= 2});
        relations.half_damage_from.map((item)=>{ effectiveness[item] *= 0.5});
        relations.no_damage_from.map((item)=>{ effectiveness[item] *= 0});
    }

    // 변환된 결과를 저장할 객체
    const groupedEffectiveness = {};

    // 효과를 그룹화하는 로직
    for (const [type, multiplier] of Object.entries(effectiveness)) {
        if (!groupedEffectiveness[multiplier]) {
            groupedEffectiveness[multiplier] = []; // 새로운 배열 생성
        }
        // 한글 타입 이름으로 변환하여 추가
        groupedEffectiveness[multiplier].push({
            key : type,
            text :typeNamesKorean[type]
        }); 
    }

    return groupedEffectiveness;
}

async function getTypeInfo(type){
    const url = type.type.url;

    const res = await fetch(url);
    const json = res.json();
    return json;
}