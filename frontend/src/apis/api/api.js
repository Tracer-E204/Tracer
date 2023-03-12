import { defaultInstance } from 'apis/utils';

// GET APIs
/**
 * GET : 뉴스 리스트 데이터를 가져온다.
 * @param {int} typeCode 뉴스 타입 아직 미정
 * @param {int} limit 리스트로 가져올 item 개수
 * @param {int} offset skip할 개수
 * @returns [] : typeCode에 따른 Item을 가진 배열
 */
export const getNewsList = async (typeCode, limit, offset) => {
  const { data } = await defaultInstance.get(`/news?typeCode=${typeCode}&limit=${limit}&offSet=${offset}`);
  return data;
};

/**
 * GET : 워드클라우드 키워드 리스트를 가져온다.
 * @param {int} typeCode 키워드 타입 아직 미정
 * @param {int} limit 리스트로 가져올 item 개수
 * @param {int} offset skip할 개수
 * @returns [] : typeCode에 따른 Item을 가진 배열
 */
export const getWordCloudKeywordList = async (typeCode, limit, offset) => {
  const { data } = await defaultInstance.get(`/wordcloudkeywords?typeCode=${typeCode}&limit=${limit}&offSet=${offset}`);
  return data;
};

/**
 * GET : 타임라인 키워드 리스트를 가져온다.
 * @param {int} typeCode 키워드 타입 아직 미정
 * @param {int} limit 리스트로 가져올 item 개수
 * @param {int} offset skip할 개수
 * @returns [] : typeCode에 따른 Item을 가진 배열
 */
export const getTimelineKeywordList = async (typeCode, limit, offset) => {
  const { data } = await defaultInstance.get(`/timelinekeywords?typeCode=${typeCode}&limit=${limit}&offSet=${offset}`);
  return data;
};
