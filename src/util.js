import emotionId1 from "./img/emotion1.png";
import emotionId2 from "./img/emotion2.png";
import emotionId3 from "./img/emotion3.png";
import emotionId4 from "./img/emotion4.png";
import emotionId5 from "./img/emotion5.png";

export const getEmotionImgById = (emotionId) => {
    const targetEmotionId = String(emotionId);
    switch (targetEmotionId) {
        case "1":
            return emotionId1;
        case "2":
            return emotionId2;
        case "3":
            return emotionId3;
        case "4":
            return emotionId4;
        case "5":
            return emotionId5;
        default:
            return null;
    }
};

export const getFormattedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();
    if (month < 10) {
        month = `0${month}`;
    }
    if (date < 10) {
        date = `0${date}`;
    }
    return `${year}-${month}-${date}`;
};