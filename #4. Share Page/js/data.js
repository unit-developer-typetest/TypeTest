const qnaList = [
  {
    q: '1. 12시 수업을 막 마친 당신. 마침 한 시간 공강이다. 점심을 먹으려 한다.',
    a: [
      { answer: 'a. “공강 모여~~~~” 과 단톡으로 직행.', type: [1, 2, 4, 9] },
      { answer: 'b.“점심 먹을 사람? ㅎㅎ” 과 단톡은 아무래도 부담스럽다. 소모임 단톡에 물어보기. 친한 사람 몇 명은 있으니까!', type: [0, 3, 6, 5, 10, 8] },
      { answer: 'c. 친구 부를 필요 뭐 있나. 혼밥이 편하고 좋다. 아싸 뭐 먹지~', type: [7, 11 ] },
    ]
  },
  {
    q: '2. 친구와 술자리를 갖는 당신. 이런 저런 이야기를 나누며 즐거운 와중, 친구가 소개해주고 싶은 사람이 있다고 한다. 너만 괜찮다면 지금 연락해보겠다는데.',
    a: [
      { answer: 'a. 언제나 환영. 새로운 사람과의 대화는 항상 즐겁다. 불러 불러~', type: [0, 3, 2, 8] },
      { answer: 'b. 으아… 불편한데. 시끄러운 술자리는 지친다. 딱 지금이 좋아. 오늘은 우리끼리 마시자.', type: [1, 6, 5, 10] },
      //{ answer: 'c. 상대방에게 먼저 연락 올 때까지 기다린다.', type: [7, 4, 9, 11] },
    ]
  },
  {
    q: '3. 시간을 거슬러 초등학교 미술 수업 시간. 담임선생님께서 색종이를 나눠주며, 만들고 싶은 대로 마음껏 만들라고 하신다.',
    a: [
      { answer: 'a. 색종이 넘겨받기도 전부터 드릉드릉. 무엇을 만들지 상상의 나래를 펼친다. 신나! 재밌어!', type: [1, 3, 2, 10, 8] },
      { answer: 'b. 괴로워… 창작은 고통이다. 벌써 머리가 지끈. 색종이 넘겨받으면 표지 뒷장부터 살펴봐야지. 학 접는 방법이라도 있을지 모른다.', type: [7, 9, 11] },
      //{ answer: 'c. 완벽한 분위기, 완벽한 타이밍에서 고백한다.', type: [0, 6, 5, 4] }
    ]
  },
  {
    q: '4. 친구와 영화를 보고 나오는 길. 당신이 나누고 싶은 대화는?',
    a: [
      { answer: 'a. 크~ 재밌었다. 연기도 너무 좋았어. ', type: [1, 2, 4 ] },
      { answer: 'b. 너라면 그 상황에서 어떻게 할 거야? 그래? 그럼 만약에 세상이 무너지면? 만약에 지구가 멸망하면? 만약에~… ', type: [7, 10, 8, 9, 11 ] },
      //{ answer: 'c. 센스있는 "우리 내일은 연인으로 만날까요" ', type: [0, 3, 6, 5 ] },
    ]
  },
  {
    q: '5. 수강신청 이틀 전, 당신의 시간표 상태는?',
    a: [
      { answer: 'a. 학과에서 권장하는 커리큘럼 기반으로 플랜a부터 플랜c까지 다 짜놨다. 만족스럽다.', type: [1, 7, 10, 4, 9 ] },
      { answer: 'b. 황량하다. 확정된 건 전공필수 두 과목 뿐. 이대로면 6학점이지만, 괜찮다. 당신에겐 아직 ‘이틀이나’ 남았다.', type: [0, 3, 6, 11]},
      //{ answer: 'c. 어차피 내 연인인데 왜?? 모든 스킨십 다 돼!', type: [2, 5, 8] },
    ]
  },

  {
    q: '6. 다음 중 당신이 더 선호하는 시험 유형은?',
    a: [
      { answer: 'a. 정답이 명확한, 객관식 30문제', type: [4, 9, 11 ] },
      { answer: 'b. 레포트 대체과제. 분량 2,000자 이상. 정답은 교수님 마음 속에', type: [0, 3, 6, 10 ] },
      //{ answer: 'c. 이미 깜짝 이벤트 다 준비해놨어', type: [1, 7, 2, 5, 8 ] },
    ]
  },
  {
    q: '7. 약속 전 날 밤의 당신은?',
    a: [
      { answer: 'a. 내일 입을 옷은 진작 정해서 따로 꺼내놨다. 내일 가는 길 시뮬레이션 중. 아, 맞다. 빠른 환승 게이트도 미리 알아놔야지.', type: [1, 7, 11 ] },
      { answer: 'b. 12시 약속이니까 10시에 일어나면 충분하겠네. 재밌겠다~ 아, 맞다. 알람 맞춰야지.', type: [2, 4, 9 ] },
      //{ answer: 'c. "오 대박 오늘 머리도 바꾸고 옷도 새로 샀네?"라고 하며 단번에 눈치챈다', type: [0, 3, 6, 5, 10, 8 ] },
    ]
  },
  {
    q: '8. “이번 주말에 뭐해?” 라는 질문에, 다음 중 당신이 할 만한 대답은?',
    a: [
      { answer: 'a. 조조영화 볼 거야. 좋아하는 배우 신작 나왔거든. 예매? 당연히 해놨지~ 아, 그리고 공차 신상 나왔더라. 사먹어볼까 생각 중.', type: [0, 4, 9 ] },
      { answer: 'b. 주말? 글쎄… 생각해보진 않았는데. 오랜만에 영화나 볼까.', type: [3, 2, 6, 5, 10, 8 ] },
      //{ answer: 'c. 집 앞까지 데려다준다.', type: [1, 7, 11 ] },
    ]
  },
  
  {
    q: '9. 당신이 선호하는 프로젝트 단계는?',
    a: [
      { answer: 'a. 프로젝트의 전체 틀을 구상하는 ‘기획', type: [4, 9, 11] },
      { answer: 'b. 프로젝트의 각 파트에 사용될 ‘자료 및 데이터 정리’', type: [0, 2, 6, 5 ] },
      { answer: 'c. 프로젝트 발표를 화려하게 빛낼 ‘Pt 자료 디자인’', type: [1, 7, 3, 10, 8 ] },
      { answer: 'd. 프로젝트의 완성, ‘발표’', type: [1, 7, 3, 10, 8 ] },
    ]
  },
  {
    q: '10. 출출한 밤, 라면을 끓여 먹으려고 한다. 당신의 스타일은? ',
    a: [
      { answer: 'a. 설명서를 보고 정석대로 끓인다.', type: [1, 4, 9, 11 ] },
      { answer: 'b. 쌓아온 내공이 있지. 나의 감에 의존한다.', type: [7, 0, 3, 6, 10] },
      { answer: 'c. 색다르게 끓여봐야지. 유튜브에 라면 레시피를 검색해본다.', type: [2, 5, 8 ] },
    ]
  },
  {
    q: '11. 집 짓는 아기돼지 삼 형제 중 당신과 가장 가까운 캐릭터는? ',
    a: [
      { answer: 'a. 볏짚으로 집 지은 첫째', type: [1, 4, 9, 11 ] },
      { answer: 'b. 나무로 집 지은 둘째', type: [7, 0, 3, 6, 10] },
      { answer: 'c. 벽돌로 집 지은 셋째', type: [2, 5, 8 ] },
    ]
  },
  {
    q: '12. 다음 중 당신이 가장 선호하는 아르바이트는? ',
    a: [
      { answer: 'a. 사람들과 부대끼며 다양한 인연을 쌓을 수 있는 ‘영화관 알바’', type: [1, 4, 9, 11 ] },
      { answer: 'b. 물류 입고부터 물건 진열까지 혼자 척척 ‘편의점 알바’', type: [7, 0, 3, 6, 10] },
      { answer: 'c. 방식에 맞춰 파일을 정리하고 자료를 분류하는 ‘데스크 알바’', type: [2, 5, 8 ] },
    ]
  }
]

const infoList = [
  {
    name: '연애 뭐 식은 죽 먹기죠, 연애 재능 만땅 <쥐>',
    desc: '연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! '
  },
  {
    name: '난 너만 봐, 정직한 연애 스타일의 <소>',
    desc: '연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! '
  },
  {
    name: '야 사귀자, 사랑을 쟁취하는 <호랑이>',
    desc: '한 번 좋아하는 사람이 있으면 내 사람으로 만드는 당신! 호랑이에 해당하는 당신은 썸부터 사랑까지 한 번에 직진하는 스타일이랍니다. 연애할 때 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 다른 이성의 접근에 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!'
  },
  {
    name: '이건 어때? 난 어때? 독특한 매력을 가진 <토끼>',
    desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
  },
  {
    name: '결혼은 언제쯤 할까 신혼여행은 어디로?, 이상적인 연애관의 소유자 <용>',
    desc: '상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!'
  },
  {
    name: '기념일에 무슨 이벤트 할까, 이벤트 플래너 <뱀>',
    desc: '상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!'
  },
  {
    name: '어 오늘 머리 바꿨네 잘 어울린다, 센스가 뛰어난 <말>',
    desc: '연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!'
  },
  {
    name: '난 너랑 하는 것들 다 좋아, 순종적인 <양>',
    desc: '연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!'
  },
  {
    name: '난 당신의 연예인, 끼가 넘치는 재주꾼 <원숭이>',
    desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
  },
  {
    name: '이건 이거고 저건 저거지 , 공과사 확실한 <닭>',
    desc: '깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!'
  },
  {
    name: '난 네가 좋아 너무 좋아, 애교만땅 <개>',
    desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! '
  },
  {
    name: '산은 산이요 연애는 연애로다, 느긋하고 온순한 <돼지>',
    desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
  },
]
