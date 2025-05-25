// 메소드 확인 + badrequest 관리 함수
function checkRequest(req, res, option = {}) {
  const { allowedMethods, requireAuth = false, requireBody = false } = option;

  if (!allowedMethods || !Array.isArray(allowedMethods)) {
    res.status(500).json({
      success: false,
      message: "api에 전달된 method가 공란입니다.",
    });
    return false;
  }

  if (!allowedMethods.includes(req.method)) {
    res.status(405).json({
      success: false,
      message: "메소드가 다릅니다.",
    });
    return false;
  }

  if (requireAuth) {
    const userId = req.cookies.userId;
    if (!userId) {
      res.status(401).json({
        success: false,
        message: "로그인이 필요합니다.",
      });
      return false;
    }
    req.userId = userId;
  }

  if (requireBody && (!req.body || Object.keys(req.body).length == 0)) {
    res.status(400).json({
      success: false,
      message: "리퀘스트 바디가 공란입니다.",
    });
    return false;
  }

  return true;
}

function getUserIdFromCookie(req) {
  return req.cookies.userId || null;
}

export { checkRequest, getUserIdFromCookie };
