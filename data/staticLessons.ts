
import { VocabularyItem } from '../types';

export const STATIC_LESSONS: Record<number, VocabularyItem[]> = {
  1: [
    { "id": "L1-W1", "category": "Nouns", "kanji": "私", "kana": "わたし", "romaji": "watashi", "meaning": "我", "sentences": [{ "ja": "私はマイク・ミラーです。", "zh": "我是迈克·米勒。" }, { "ja": "私は学生ではありません。", "zh": "我不是学生。" }] },
    { "id": "L1-W2", "category": "Nouns", "kanji": "あなた", "kana": "あなた", "romaji": "anata", "meaning": "你", "sentences": [{ "ja": "あなたは学生ですか。", "zh": "你是学生吗？" }, { "ja": "あの人はどなたですか。", "zh": "那个人是谁？" }] },
    { "id": "L1-W3", "category": "Nouns", "kanji": "あの人", "kana": "あのひと", "romaji": "ano hito", "meaning": "那个人", "sentences": [{ "ja": "あの人は誰ですか。", "zh": "那个人是谁？" }, { "ja": "あの人はエンジニアです。", "zh": "那个人是工程师。" }] },
    { "id": "L1-W4", "category": "Nouns", "kanji": "あの方", "kana": "あのかた", "romaji": "ano kata", "meaning": "那位（あの人的礼貌说法）", "sentences": [{ "ja": "あの方はどなたですか。", "zh": "那位是谁？" }, { "ja": "あの方は先生です。", "zh": "那位是老师。" }] },
    { "id": "L1-W5", "category": "Nouns", "kanji": "～さん", "kana": "～さん", "romaji": "~san", "meaning": "...先生/女士", "sentences": [{ "ja": "ミラーさんはアメリカ人です。", "zh": "米勒先生是美国人。" }, { "ja": "佐藤さんは先生です。", "zh": "佐藤女士是老师。" }] },
    { "id": "L1-W6", "category": "Nouns", "kanji": "～ちゃん", "kana": "～ちゃん", "romaji": "~chan", "meaning": "（用于小孩或亲近称呼）", "sentences": [{ "ja": "太郎ちゃんは５歳です。", "zh": "太郎酱5岁了。" }, { "ja": "花子ちゃん、こんにちは。", "zh": "花子，你好。" }] },
    { "id": "L1-W7", "category": "Nouns", "kanji": "～君", "kana": "～くん", "romaji": "~kun", "meaning": "...君（用于男孩或下级）", "sentences": [{ "ja": "山田君は学生です。", "zh": "山田君是学生。" }, { "ja": "田中君、ちょっと来てください。", "zh": "田中君，请来一下。" }] },
    { "id": "L1-W8", "category": "Nouns", "kanji": "～人", "kana": "～じん", "romaji": "~jin", "meaning": "...国人", "sentences": [{ "ja": "私は中国人です。", "zh": "我是中国人。" }, { "ja": "マリアさんはブラジル人です。", "zh": "玛丽亚是巴西人。" }] },
    { "id": "L1-W9", "category": "Nouns", "kanji": "先生", "kana": "せんせい", "romaji": "sensei", "meaning": "老师", "sentences": [{ "ja": "ワットさんは先生です。", "zh": "瓦特先生是老师。" }, { "ja": "あの先生は有名です。", "zh": "那位老师很有名。" }] },
    { "id": "L1-W10", "category": "Nouns", "kanji": "教師", "kana": "きょうし", "romaji": "kyoushi", "meaning": "教师（职业称呼）", "sentences": [{ "ja": "私は教師です。", "zh": "我是一名教师。" }, { "ja": "母は日本語の教師です。", "zh": "我母亲是日语教师。" }] },
    { "id": "L1-W11", "category": "Nouns", "kanji": "学生", "kana": "がくせい", "romaji": "gakusei", "meaning": "学生", "sentences": [{ "ja": "私は学生です。", "zh": "我是学生。" }, { "ja": "タワポンさんは学生です。", "zh": "塔瓦蓬先生是学生。" }] },
    { "id": "L1-W12", "category": "Nouns", "kanji": "会社員", "kana": "かいしゃいん", "romaji": "kaishain", "meaning": "公司职员", "sentences": [{ "ja": "シュミットさんは会社員です。", "zh": "舒马赫先生是公司职员。" }, { "ja": "父は会社員です。", "zh": "父亲是公司职员。" }] },
    { "id": "L1-W13", "category": "Nouns", "kanji": "社員", "kana": "しゃいん", "romaji": "shain", "meaning": "...公司的职员", "sentences": [{ "ja": "IMCの社員です。", "zh": "是IMC公司的职员。" }, { "ja": "あの人は銀行の社員ですか。", "zh": "那个人是银行职员吗？" }] },
    { "id": "L1-W14", "category": "Nouns", "kanji": "銀行員", "kana": "ぎんこういん", "romaji": "ginkouin", "meaning": "银行职员", "sentences": [{ "ja": "グプタさんは銀行員です。", "zh": "古普塔先生是银行职员。" }, { "ja": "姉は銀行員です。", "zh": "姐姐是银行职员。" }] },
    { "id": "L1-W15", "category": "Nouns", "kanji": "医者", "kana": "いしゃ", "romaji": "isha", "meaning": "医生", "sentences": [{ "ja": "あの方は医者です。", "zh": "那位是医生。" }, { "ja": "病院に医者がいます。", "zh": "医院里有医生。" }] },
    { "id": "L1-W16", "category": "Nouns", "kanji": "研究者", "kana": "けんきゅうしゃ", "romaji": "kenkyuusha", "meaning": "研究人员", "sentences": [{ "ja": "ワットさんは研究者です。", "zh": "瓦特先生是研究员。" }, { "ja": "大学の研究者です。", "zh": "是大学的研究员。" }] },
    { "id": "L1-W17", "category": "Nouns", "kanji": "エンジニア", "kana": "エンジニア", "romaji": "enjinia", "meaning": "工程师", "sentences": [{ "ja": "ミラーさんはエンジニアです。", "zh": "米勒先生是工程师。" }, { "ja": "弟はエンジニアになりたいです。", "zh": "弟弟想当工程师。" }] },
    { "id": "L1-W18", "category": "Nouns", "kanji": "大学", "kana": "だいがく", "romaji": "daigaku", "meaning": "大学", "sentences": [{ "ja": "さくら大学の学生です。", "zh": "是樱花大学的学生。" }, { "ja": "ここは有名な大学です。", "zh": "这里是著名的大学。" }] },
    { "id": "L1-W19", "category": "Nouns", "kanji": "病院", "kana": "びょういん", "romaji": "byouin", "meaning": "医院", "sentences": [{ "ja": "神戸病院へ行きます。", "zh": "去神户医院。" }, { "ja": "病院はあそこです。", "zh": "医院在那边。" }] },
    { "id": "L1-W20", "category": "Nouns", "kanji": "電気", "kana": "でんき", "romaji": "denki", "meaning": "电，灯", "sentences": [{ "ja": "パワー電気の社員です。", "zh": "是动力电气公司的职员。" }, { "ja": "電気を消してください。", "zh": "请关灯。" }] },
    { "id": "L1-W21", "category": "Nouns", "kanji": "誰（どなた）", "kana": "だれ（どなた）", "romaji": "dare (donata)", "meaning": "谁（哪位）", "sentences": [{ "ja": "あの人は誰ですか。", "zh": "那个人是谁？" }, { "ja": "あの方はどなたですか。", "zh": "那位是谁？" }] },
    { "id": "L1-W22", "category": "Nouns", "kanji": "歳", "kana": "～さい", "romaji": "~sai", "meaning": "...岁", "sentences": [{ "ja": "私は２８歳です。", "zh": "我28岁。" }, { "ja": "太郎ちゃんは何歳ですか。", "zh": "太郎几岁了？" }] },
    { "id": "L1-W23", "category": "Expressions", "kanji": "はい", "kana": "はい", "romaji": "hai", "meaning": "是，对", "sentences": [{ "ja": "はい、そうです。", "zh": "是的，是那样。" }, { "ja": "はい、わかりました。", "zh": "好的，明白了。" }] },
    { "id": "L1-W24", "category": "Expressions", "kanji": "いいえ", "kana": "いいえ", "romaji": "iie", "meaning": "不，不是", "sentences": [{ "ja": "いいえ、違います。", "zh": "不，不对。" }, { "ja": "いいえ、学生ではありません。", "zh": "不，我不是学生。" }] }
  ],
  2: [
    { "id": "L2-W1", "category": "Nouns", "kanji": "これ", "kana": "これ", "romaji": "kore", "meaning": "这，这个", "sentences": [{ "ja": "これは辞書です。", "zh": "这是字典。" }, { "ja": "これは何ですか。", "zh": "这是什么？" }] },
    { "id": "L2-W2", "category": "Nouns", "kanji": "それ", "kana": "それ", "romaji": "sore", "meaning": "那，那个", "sentences": [{ "ja": "それは私の本です。", "zh": "那是我的书。" }, { "ja": "それは誰の傘ですか。", "zh": "那是谁的伞？" }] },
    { "id": "L2-W3", "category": "Nouns", "kanji": "あれ", "kana": "あれ", "romaji": "are", "meaning": "那，那个（远方）", "sentences": [{ "ja": "あれは病院です。", "zh": "那是医院。" }, { "ja": "あれは何の雑誌ですか。", "zh": "那是关于什么的杂志？" }] },
    { "id": "L2-W4", "category": "Nouns", "kanji": "この～", "kana": "この～", "romaji": "kono~", "meaning": "这...（用于名词前）", "sentences": [{ "ja": "この本は私のです。", "zh": "这本书是我的。" }, { "ja": "この人は誰ですか。", "zh": "这个人是谁？" }] },
    { "id": "L2-W5", "category": "Nouns", "kanji": "その～", "kana": "その～", "romaji": "sono~", "meaning": "那...（用于名词前）", "sentences": [{ "ja": "その辞書はいいです。", "zh": "那本字典很好。" }, { "ja": "そのペンは佐藤さんのです。", "zh": "那支笔是佐藤先生的。" }] },
    { "id": "L2-W6", "category": "Nouns", "kanji": "あの～", "kana": "あの～", "romaji": "ano~", "meaning": "那...（用于远方名词前）", "sentences": [{ "ja": "あの人はミラーさんです。", "zh": "那个人是米勒先生。" }, { "ja": "あの店は安いです。", "zh": "那家店很便宜。" }] },
    { "id": "L2-W7", "category": "Nouns", "kanji": "本", "kana": "ほん", "romaji": "hon", "meaning": "书", "sentences": [{ "ja": "日本語の本を買いました。", "zh": "买了日语书。" }, { "ja": "これは誰の本ですか。", "zh": "这是谁的书？" }] },
    { "id": "L2-W8", "category": "Nouns", "kanji": "辞書", "kana": "じしょ", "romaji": "jisho", "meaning": "字典，词典", "sentences": [{ "ja": "電子辞書を持っています。", "zh": "有电子词典。" }, { "ja": "辞書で調べます。", "zh": "查字典。" }] },
    { "id": "L2-W9", "category": "Nouns", "kanji": "雑誌", "kana": "ざっし", "romaji": "zasshi", "meaning": "杂志", "sentences": [{ "ja": "カメラの雑誌です。", "zh": "是相机的杂志。" }, { "ja": "毎週雑誌を読みます。", "zh": "每周看杂志。" }] },
    { "id": "L2-W10", "category": "Nouns", "kanji": "新聞", "kana": "しんぶん", "romaji": "shinbun", "meaning": "报纸", "sentences": [{ "ja": "毎朝新聞を読みます。", "zh": "每天早上读报。" }, { "ja": "英語の新聞がありますか。", "zh": "有英文报纸吗？" }] },
    { "id": "L2-W11", "category": "Nouns", "kanji": "ノート", "kana": "ノート", "romaji": "nooto", "meaning": "笔记本", "sentences": [{ "ja": "新しいノートを買いました。", "zh": "买了新笔记本。" }, { "ja": "これは誰のノートですか。", "zh": "这是谁的笔记本？" }] },
    { "id": "L2-W12", "category": "Nouns", "kanji": "手帳", "kana": "てちょう", "romaji": "techou", "meaning": "记事本", "sentences": [{ "ja": "手帳に予定を書きます。", "zh": "在记事本上写计划。" }, { "ja": "これは私の手帳です。", "zh": "这是我的记事本。" }] },
    { "id": "L2-W13", "category": "Nouns", "kanji": "名刺", "kana": "めいし", "romaji": "meishi", "meaning": "名片", "sentences": [{ "ja": "名刺を交換します。", "zh": "交换名片。" }, { "ja": "佐藤さんの名刺です。", "zh": "是佐藤先生的名片。" }] },
    { "id": "L2-W14", "category": "Nouns", "kanji": "カード", "kana": "カード", "romaji": "kaado", "meaning": "卡片", "sentences": [{ "ja": "キャッシュカードを忘れました。", "zh": "忘了银行卡。" }, { "ja": "クリスマスカードを書きます。", "zh": "写圣诞卡。" }] },
    { "id": "L2-W15", "category": "Nouns", "kanji": "鉛筆", "kana": "えんぴつ", "romaji": "enpitsu", "meaning": "铅笔", "sentences": [{ "ja": "鉛筆で書きます。", "zh": "用铅笔写。" }, { "ja": "鉛筆を貸してください。", "zh": "请借给我铅笔。" }] },
    { "id": "L2-W16", "category": "Nouns", "kanji": "ボールペン", "kana": "ボールペン", "romaji": "boorupen", "meaning": "圆珠笔", "sentences": [{ "ja": "このボールペンは１００円です。", "zh": "这支圆珠笔100日元。" }, { "ja": "ボールペンを持っていますか。", "zh": "有圆珠笔吗？" }] },
    { "id": "L2-W17", "category": "Nouns", "kanji": "シャープペンシル", "kana": "シャープペンシル", "romaji": "shaapupenshiru", "meaning": "自动铅笔", "sentences": [{ "ja": "シャープペンシルが壊れました。", "zh": "自动铅笔坏了。" }, { "ja": "それはシャープペンシルですか。", "zh": "那是自动铅笔吗？" }] },
    { "id": "L2-W18", "category": "Nouns", "kanji": "鍵", "kana": "かぎ", "romaji": "kagi", "meaning": "钥匙", "sentences": [{ "ja": "車の鍵をなくしました。", "zh": "丢了车钥匙。" }, { "ja": "鍵をかけてください。", "zh": "请锁门。" }] },
    { "id": "L2-W19", "category": "Nouns", "kanji": "時計", "kana": "とけい", "romaji": "tokei", "meaning": "钟，手表", "sentences": [{ "ja": "この時計は高いです。", "zh": "这块表很贵。" }, { "ja": "時計はどこにありますか。", "zh": "钟在哪里？" }] },
    { "id": "L2-W20", "category": "Nouns", "kanji": "傘", "kana": "かさ", "romaji": "kasa", "meaning": "伞", "sentences": [{ "ja": "傘を貸しましょうか。", "zh": "要借给你伞吗？" }, { "ja": "雨ですから、傘をさします。", "zh": "下雨了，所以打伞。" }] },
    { "id": "L2-W21", "category": "Nouns", "kanji": "鞄", "kana": "かばん", "romaji": "kaban", "meaning": "包，皮包", "sentences": [{ "ja": "大きい鞄を買いました。", "zh": "买了个大包。" }, { "ja": "この鞄は誰のですか。", "zh": "这个包是谁的？" }] },
    { "id": "L2-W22", "category": "Nouns", "kanji": "CD", "kana": "シーディー", "romaji": "shiidii", "meaning": "CD，光盘", "sentences": [{ "ja": "日本語のCDを聞きます。", "zh": "听日语CD。" }, { "ja": "新しいCDを買いました。", "zh": "买了新CD。" }] },
    { "id": "L2-W23", "category": "Nouns", "kanji": "テレビ", "kana": "テレビ", "romaji": "terebi", "meaning": "电视", "sentences": [{ "ja": "テレビを見ます。", "zh": "看电视。" }, { "ja": "テレビが壊れました。", "zh": "电视坏了。" }] },
    { "id": "L2-W24", "category": "Nouns", "kanji": "ラジオ", "kana": "ラジオ", "romaji": "rajio", "meaning": "收音机", "sentences": [{ "ja": "ラジオを聞きます。", "zh": "听广播。" }, { "ja": "ラジオはどこにありますか。", "zh": "收音机在哪里？" }] },
    { "id": "L2-W25", "category": "Nouns", "kanji": "カメラ", "kana": "カメラ", "romaji": "kamera", "meaning": "照相机", "sentences": [{ "ja": "カメラで写真を撮ります。", "zh": "用相机拍照。" }, { "ja": "それは日本のカメラですか。", "zh": "那是日本产的相机吗？" }] }
  ],
  3: [
  { "id": "L3-W1", "category": "Nouns", "kanji": "教室", "kana": "きょうしつ", "romaji": "kyoushitsu", "meaning": "教室", "sentences": [{ "ja": "教室はあそこです。", "zh": "教室在那边。" }, { "ja": "教室に学生がいます。", "zh": "教室里有学生。" }] },

  { "id": "L3-W2", "category": "Nouns", "kanji": "食堂", "kana": "しょくどう", "romaji": "shokudou", "meaning": "食堂", "sentences": [{ "ja": "食堂は二階です。", "zh": "食堂在二楼。" }, { "ja": "食堂で昼ご飯を食べます。", "zh": "在食堂吃午饭。" }] },

  { "id": "L3-W3", "category": "Nouns", "kanji": "事務所", "kana": "じむしょ", "romaji": "jimusho", "meaning": "办公室", "sentences": [{ "ja": "事務所はここです。", "zh": "办公室在这里。" }, { "ja": "事務所に先生がいます。", "zh": "办公室里有老师。" }] },

  { "id": "L3-W4", "category": "Nouns", "kanji": "会議室", "kana": "かいぎしつ", "romaji": "kaigishitsu", "meaning": "会议室", "sentences": [{ "ja": "会議室は三階です。", "zh": "会议室在三楼。" }, { "ja": "会議室で会議があります。", "zh": "会议室有会议。" }] },

  { "id": "L3-W5", "category": "Nouns", "kanji": "受付", "kana": "うけつけ", "romaji": "uketsuke", "meaning": "接待处", "sentences": [{ "ja": "受付はあちらです。", "zh": "接待处在那边。" }, { "ja": "受付で名前を書きます。", "zh": "在接待处写名字。" }] },

  { "id": "L3-W6", "category": "Nouns", "kanji": "ロビー", "kana": "ロビー", "romaji": "robii", "meaning": "大厅", "sentences": [{ "ja": "ロビーに人がいます。", "zh": "大厅里有人。" }, { "ja": "ロビーで待ちます。", "zh": "在大厅等。" }] },

  { "id": "L3-W7", "category": "Nouns", "kanji": "部屋", "kana": "へや", "romaji": "heya", "meaning": "房间", "sentences": [{ "ja": "私の部屋は二階です。", "zh": "我的房间在二楼。" }, { "ja": "部屋にテレビがあります。", "zh": "房间里有电视。" }] },

  { "id": "L3-W8", "category": "Nouns", "kanji": "トイレ", "kana": "トイレ", "romaji": "toire", "meaning": "厕所", "sentences": [{ "ja": "トイレはどこですか。", "zh": "厕所在哪里？" }, { "ja": "トイレはあそこです。", "zh": "厕所在那边。" }] },

  { "id": "L3-W9", "category": "Nouns", "kanji": "お手洗い", "kana": "おてあらい", "romaji": "otearai", "meaning": "洗手间（礼貌）", "sentences": [{ "ja": "お手洗いはどちらですか。", "zh": "洗手间在哪边？" }, { "ja": "お手洗いは二階です。", "zh": "洗手间在二楼。" }] },

  { "id": "L3-W10", "category": "Nouns", "kanji": "階段", "kana": "かいだん", "romaji": "kaidan", "meaning": "楼梯", "sentences": [{ "ja": "階段はあちらです。", "zh": "楼梯在那边。" }, { "ja": "階段で上へ行きます。", "zh": "走楼梯上去。" }] },

  { "id": "L3-W11", "category": "Nouns", "kanji": "エレベーター", "kana": "エレベーター", "romaji": "erebeetaa", "meaning": "电梯", "sentences": [{ "ja": "エレベーターはそこです。", "zh": "电梯在那里。" }, { "ja": "エレベーターで三階へ行きます。", "zh": "坐电梯去三楼。" }] },

  { "id": "L3-W12", "category": "Expressions", "kanji": "ここ", "kana": "ここ", "romaji": "koko", "meaning": "这里", "sentences": [{ "ja": "ここは教室です。", "zh": "这里是教室。" }, { "ja": "ここに座ってください。", "zh": "请坐在这里。" }] },

  { "id": "L3-W13", "category": "Expressions", "kanji": "そこ", "kana": "そこ", "romaji": "soko", "meaning": "那里（靠近对方）", "sentences": [{ "ja": "そこは図書館です。", "zh": "那里是图书馆。" }, { "ja": "そこに何がありますか。", "zh": "那里有什么？" }] },

  { "id": "L3-W14", "category": "Expressions", "kanji": "あそこ", "kana": "あそこ", "romaji": "asoko", "meaning": "那边（远方）", "sentences": [{ "ja": "あそこは食堂です。", "zh": "那边是食堂。" }, { "ja": "あそこに山があります。", "zh": "那边有山。" }] },

  { "id": "L3-W15", "category": "Expressions", "kanji": "どこ", "kana": "どこ", "romaji": "doko", "meaning": "哪里", "sentences": [{ "ja": "トイレはどこですか。", "zh": "厕所在哪里？" }, { "ja": "あなたの家はどこですか。", "zh": "你家在哪里？" }] },

  { "id": "L3-W16", "category": "Expressions", "kanji": "こちら", "kana": "こちら", "romaji": "kochira", "meaning": "这边（礼貌）", "sentences": [{ "ja": "こちらは受付です。", "zh": "这边是前台。" }, { "ja": "こちらへどうぞ。", "zh": "请这边走。" }] },

  { "id": "L3-W17", "category": "Expressions", "kanji": "そちら", "kana": "そちら", "romaji": "sochira", "meaning": "那边（礼貌）", "sentences": [{ "ja": "そちらは会議室です。", "zh": "那边是会议室。" }, { "ja": "そちらに行きます。", "zh": "去那边。" }] },

  { "id": "L3-W18", "category": "Expressions", "kanji": "あちら", "kana": "あちら", "romaji": "achira", "meaning": "那边（远方，礼貌）", "sentences": [{ "ja": "あちらは出口です。", "zh": "那边是出口。" }, { "ja": "あちらに先生がいます。", "zh": "那边有老师。" }] },

  { "id": "L3-W19", "category": "Expressions", "kanji": "どちら", "kana": "どちら", "romaji": "dochira", "meaning": "哪边（礼貌）", "sentences": [{ "ja": "駅はどちらですか。", "zh": "车站在哪边？" }, { "ja": "どちらへ行きますか。", "zh": "去哪里？" }] },

  { "id": "L3-W20", "category": "Expressions", "kanji": "いくら", "kana": "いくら", "romaji": "ikura", "meaning": "多少钱", "sentences": [{ "ja": "これはいくらですか。", "zh": "这个多少钱？" }, { "ja": "りんごはいくらですか。", "zh": "苹果多少钱？" }] }
],
  4: [
  { "id": "L4-W1", "category": "Nouns", "kanji": "今", "kana": "いま", "romaji": "ima", "meaning": "现在", "sentences": [{ "ja": "今、何時ですか。", "zh": "现在几点？" }, { "ja": "今、忙しいです。", "zh": "现在很忙。" }] },

  { "id": "L4-W2", "category": "Nouns", "kanji": "時", "kana": "～じ", "romaji": "~ji", "meaning": "...点钟", "sentences": [{ "ja": "7時です。", "zh": "7点。" }, { "ja": "8時に起きます。", "zh": "8点起床。" }] },

  { "id": "L4-W3", "category": "Nouns", "kanji": "分", "kana": "～ふん／ぷん", "romaji": "~fun/pun", "meaning": "...分", "sentences": [{ "ja": "10時5分です。", "zh": "10点5分。" }, { "ja": "30分待ちます。", "zh": "等30分钟。" }] },

  { "id": "L4-W4", "category": "Nouns", "kanji": "半", "kana": "はん", "romaji": "han", "meaning": "半", "sentences": [{ "ja": "7時半です。", "zh": "7点半。" }, { "ja": "6時半に帰ります。", "zh": "6点半回家。" }] },

  { "id": "L4-W5", "category": "Nouns", "kanji": "午前", "kana": "ごぜん", "romaji": "gozen", "meaning": "上午", "sentences": [{ "ja": "午前7時です。", "zh": "上午7点。" }, { "ja": "午前に勉強します。", "zh": "上午学习。" }] },

  { "id": "L4-W6", "category": "Nouns", "kanji": "午後", "kana": "ごご", "romaji": "gogo", "meaning": "下午", "sentences": [{ "ja": "午後3時です。", "zh": "下午3点。" }, { "ja": "午後に会議があります。", "zh": "下午有会议。" }] },

  { "id": "L4-W7", "category": "Nouns", "kanji": "朝", "kana": "あさ", "romaji": "asa", "meaning": "早上", "sentences": [{ "ja": "朝6時に起きます。", "zh": "早上6点起床。" }, { "ja": "朝ご飯を食べます。", "zh": "吃早饭。" }] },

  { "id": "L4-W8", "category": "Nouns", "kanji": "昼", "kana": "ひる", "romaji": "hiru", "meaning": "中午", "sentences": [{ "ja": "昼にご飯を食べます。", "zh": "中午吃饭。" }, { "ja": "昼は忙しいです。", "zh": "中午很忙。" }] },

  { "id": "L4-W9", "category": "Nouns", "kanji": "夜", "kana": "よる", "romaji": "yoru", "meaning": "晚上", "sentences": [{ "ja": "夜10時に寝ます。", "zh": "晚上10点睡觉。" }, { "ja": "夜に勉強します。", "zh": "晚上学习。" }] },

  { "id": "L4-W10", "category": "Expressions", "kanji": "毎日", "kana": "まいにち", "romaji": "mainichi", "meaning": "每天", "sentences": [{ "ja": "毎日勉強します。", "zh": "每天学习。" }, { "ja": "毎日働きます。", "zh": "每天工作。" }] },

  { "id": "L4-W11", "category": "Expressions", "kanji": "今晩", "kana": "こんばん", "romaji": "konban", "meaning": "今晚", "sentences": [{ "ja": "今晩勉強します。", "zh": "今晚学习。" }, { "ja": "今晩早く寝ます。", "zh": "今晚早点睡。" }] },

  { "id": "L4-W12", "category": "Verbs", "grammarType": "Group II", "kanji": "起きます", "kana": "おきます", "romaji": "okimasu", "meaning": "起床", "conjugations": { "masu": "起きます", "dictionary": "起きる", "te": "起きて", "nai": "起きない", "ta": "起きた" }, "sentences": [{ "ja": "6時に起きます。", "zh": "6点起床。" }, { "ja": "毎朝7時に起きます。", "zh": "每天早上7点起床。" }] },

  { "id": "L4-W13", "category": "Verbs", "grammarType": "Group II", "kanji": "寝ます", "kana": "ねます", "romaji": "nemasu", "meaning": "睡觉", "conjugations": { "masu": "寝ます", "dictionary": "寝る", "te": "寝て", "nai": "寝ない", "ta": "寝た" }, "sentences": [{ "ja": "11時に寝ます。", "zh": "11点睡觉。" }, { "ja": "早く寝ます。", "zh": "早点睡。" }] },

  { "id": "L4-W14", "category": "Verbs", "grammarType": "Group I", "kanji": "働きます", "kana": "はたらきます", "romaji": "hatarakimasu", "meaning": "工作", "conjugations": { "masu": "働きます", "dictionary": "働く", "te": "働いて", "nai": "働かない", "ta": "働いた" }, "sentences": [{ "ja": "会社で働きます。", "zh": "在公司工作。" }, { "ja": "毎日働きます。", "zh": "每天工作。" }] },

  { "id": "L4-W15", "category": "Verbs", "grammarType": "Group I", "kanji": "休みます", "kana": "やすみます", "romaji": "yasumimasu", "meaning": "休息，请假", "conjugations": { "masu": "休みます", "dictionary": "休む", "te": "休んで", "nai": "休まない", "ta": "休んだ" }, "sentences": [{ "ja": "日曜日に休みます。", "zh": "星期天休息。" }, { "ja": "今日は会社を休みます。", "zh": "今天请假。" }] },

  { "id": "L4-W16", "category": "Verbs", "grammarType": "Irregular", "kanji": "勉強します", "kana": "べんきょうします", "romaji": "benkyoushimasu", "meaning": "学习", "conjugations": { "masu": "勉強します", "dictionary": "勉強する", "te": "勉強して", "nai": "勉強しない", "ta": "勉強した" }, "sentences": [{ "ja": "日本語を勉強します。", "zh": "学习日语。" }, { "ja": "夜に勉強します。", "zh": "晚上学习。" }] },

  { "id": "L4-W17", "category": "Verbs", "grammarType": "Group I", "kanji": "終わります", "kana": "おわります", "romaji": "owarimasu", "meaning": "结束", "conjugations": { "masu": "終わります", "dictionary": "終わる", "te": "終わって", "nai": "終わらない", "ta": "終わった" }, "sentences": [{ "ja": "仕事は5時に終わります。", "zh": "工作5点结束。" }, { "ja": "授業が終わります。", "zh": "课结束。" }] }
],
 5: [

  { "id": "L5-W1", "category": "Verbs", "grammarType": "Group I", "kanji": "行きます", "kana": "いきます", "romaji": "ikimasu", "meaning": "去", "conjugations": { "masu": "行きます", "dictionary": "行く", "te": "行って", "nai": "行かない", "ta": "行った" }, "sentences": [{ "ja": "学校へ行きます。", "zh": "去学校。" }] },

  { "id": "L5-W2", "category": "Verbs", "grammarType": "Irregular", "kanji": "来ます", "kana": "きます", "romaji": "kimasu", "meaning": "来", "conjugations": { "masu": "来ます", "dictionary": "来る", "te": "来て", "nai": "来ない", "ta": "来た" }, "sentences": [{ "ja": "友達が来ます。", "zh": "朋友来。" }] },

  { "id": "L5-W3", "category": "Verbs", "grammarType": "Group I", "kanji": "帰ります", "kana": "かえります", "romaji": "kaerimasu", "meaning": "回去，回家", "conjugations": { "masu": "帰ります", "dictionary": "帰る", "te": "帰って", "nai": "帰らない", "ta": "帰った" }, "sentences": [{ "ja": "家へ帰ります。", "zh": "回家。" }] },

  { "id": "L5-W4", "category": "Nouns", "kanji": "学校", "kana": "がっこう", "romaji": "gakkou", "meaning": "学校", "sentences": [{ "ja": "学校へ行きます。", "zh": "去学校。" }] },

  { "id": "L5-W5", "category": "Nouns", "kanji": "会社", "kana": "かいしゃ", "romaji": "kaisha", "meaning": "公司", "sentences": [{ "ja": "会社へ行きます。", "zh": "去公司。" }] },

  { "id": "L5-W6", "category": "Nouns", "kanji": "家", "kana": "いえ", "romaji": "ie", "meaning": "家", "sentences": [{ "ja": "家へ帰ります。", "zh": "回家。" }] },

  { "id": "L5-W7", "category": "Nouns", "kanji": "駅", "kana": "えき", "romaji": "eki", "meaning": "车站", "sentences": [{ "ja": "駅へ行きます。", "zh": "去车站。" }] },

  { "id": "L5-W8", "category": "Nouns", "kanji": "スーパー", "kana": "スーパー", "romaji": "suupaa", "meaning": "超市", "sentences": [{ "ja": "スーパーへ行きます。", "zh": "去超市。" }] },

  { "id": "L5-W9", "category": "Nouns", "kanji": "デパート", "kana": "デパート", "romaji": "depaato", "meaning": "百货商店", "sentences": [{ "ja": "デパートへ行きます。", "zh": "去百货公司。" }] },

  { "id": "L5-W10", "category": "Nouns", "kanji": "銀行", "kana": "ぎんこう", "romaji": "ginkou", "meaning": "银行", "sentences": [{ "ja": "銀行へ行きます。", "zh": "去银行。" }] },

  { "id": "L5-W11", "category": "Nouns", "kanji": "郵便局", "kana": "ゆうびんきょく", "romaji": "yuubinkyoku", "meaning": "邮局", "sentences": [{ "ja": "郵便局へ行きます。", "zh": "去邮局。" }] },

  { "id": "L5-W12", "category": "Nouns", "kanji": "図書館", "kana": "としょかん", "romaji": "toshokan", "meaning": "图书馆", "sentences": [{ "ja": "図書館へ行きます。", "zh": "去图书馆。" }] },

  { "id": "L5-W13", "category": "Nouns", "kanji": "美術館", "kana": "びじゅつかん", "romaji": "bijutsukan", "meaning": "美术馆", "sentences": [{ "ja": "美術館へ行きます。", "zh": "去美术馆。" }] },

  { "id": "L5-W14", "category": "Nouns", "kanji": "飛行機", "kana": "ひこうき", "romaji": "hikouki", "meaning": "飞机", "sentences": [{ "ja": "飛行機で行きます。", "zh": "坐飞机去。" }] },

  { "id": "L5-W15", "category": "Nouns", "kanji": "電車", "kana": "でんしゃ", "romaji": "densha", "meaning": "电车", "sentences": [{ "ja": "電車で学校へ行きます。", "zh": "坐电车去学校。" }] },

  { "id": "L5-W16", "category": "Nouns", "kanji": "バス", "kana": "バス", "romaji": "basu", "meaning": "公交车", "sentences": [{ "ja": "バスで行きます。", "zh": "坐公交去。" }] },

  { "id": "L5-W17", "category": "Nouns", "kanji": "タクシー", "kana": "タクシー", "romaji": "takushii", "meaning": "出租车", "sentences": [{ "ja": "タクシーで帰ります。", "zh": "坐出租车回家。" }] },

  { "id": "L5-W18", "category": "Nouns", "kanji": "自転車", "kana": "じてんしゃ", "romaji": "jitensha", "meaning": "自行车", "sentences": [{ "ja": "自転車で学校へ行きます。", "zh": "骑车去学校。" }] },

  { "id": "L5-W19", "category": "Expressions", "kanji": "歩いて", "kana": "あるいて", "romaji": "aruite", "meaning": "步行", "sentences": [{ "ja": "歩いて帰ります。", "zh": "走路回家。" }] },

  { "id": "L5-W20", "category": "Nouns", "kanji": "今日", "kana": "きょう", "romaji": "kyou", "meaning": "今天", "sentences": [{ "ja": "今日学校へ行きます。", "zh": "今天去学校。" }] },

  { "id": "L5-W21", "category": "Nouns", "kanji": "明日", "kana": "あした", "romaji": "ashita", "meaning": "明天", "sentences": [{ "ja": "明日会社へ行きます。", "zh": "明天去公司。" }] },

  { "id": "L5-W22", "category": "Nouns", "kanji": "昨日", "kana": "きのう", "romaji": "kinou", "meaning": "昨天", "sentences": [{ "ja": "昨日家へ帰りました。", "zh": "昨天回家了。" }] },

  { "id": "L5-W23", "category": "Nouns", "kanji": "月曜日", "kana": "げつようび", "romaji": "getsuyoubi", "meaning": "星期一", "sentences": [{ "ja": "月曜日に学校へ行きます。", "zh": "星期一去学校。" }] },

  { "id": "L5-W24", "category": "Nouns", "kanji": "火曜日", "kana": "かようび", "romaji": "kayoubi", "meaning": "星期二", "sentences": [{ "ja": "火曜日に会社へ行きます。", "zh": "星期二去公司。" }] },

  { "id": "L5-W25", "category": "Nouns", "kanji": "水曜日", "kana": "すいようび", "romaji": "suiyoubi", "meaning": "星期三", "sentences": [{ "ja": "水曜日に図書館へ行きます。", "zh": "星期三去图书馆。" }] },

  { "id": "L5-W26", "category": "Nouns", "kanji": "木曜日", "kana": "もくようび", "romaji": "mokuyoubi", "meaning": "星期四", "sentences": [{ "ja": "木曜日に銀行へ行きます。", "zh": "星期四去银行。" }] },

  { "id": "L5-W27", "category": "Nouns", "kanji": "金曜日", "kana": "きんようび", "romaji": "kinyoubi", "meaning": "星期五", "sentences": [{ "ja": "金曜日に帰ります。", "zh": "星期五回家。" }] },

  { "id": "L5-W28", "category": "Nouns", "kanji": "土曜日", "kana": "どようび", "romaji": "doyoubi", "meaning": "星期六", "sentences": [{ "ja": "土曜日に友達と行きます。", "zh": "星期六和朋友去。" }] },

  { "id": "L5-W29", "category": "Nouns", "kanji": "日曜日", "kana": "にちようび", "romaji": "nichiyoubi", "meaning": "星期日", "sentences": [{ "ja": "日曜日に休みます。", "zh": "星期日休息。" }] }
],
  6: [

  { "id": "L6-W1", "category": "Verbs", "grammarType": "Group II", "kanji": "食べます", "kana": "たべます", "romaji": "tabemasu", "meaning": "吃", "conjugations": { "masu": "食べます", "dictionary": "食べる", "te": "食べて", "nai": "食べない", "ta": "食べた" }, "sentences": [{ "ja": "ご飯を食べます。", "zh": "吃饭。" }] },

  { "id": "L6-W2", "category": "Verbs", "grammarType": "Group I", "kanji": "飲みます", "kana": "のみます", "romaji": "nomimasu", "meaning": "喝", "conjugations": { "masu": "飲みます", "dictionary": "飲む", "te": "飲んで", "nai": "飲まない", "ta": "飲んだ" }, "sentences": [{ "ja": "水を飲みます。", "zh": "喝水。" }] },

  { "id": "L6-W3", "category": "Verbs", "grammarType": "Group I", "kanji": "吸います", "kana": "すいます", "romaji": "suimasu", "meaning": "吸（烟）", "conjugations": { "masu": "吸います", "dictionary": "吸う", "te": "吸って", "nai": "吸わない", "ta": "吸った" }, "sentences": [{ "ja": "たばこを吸います。", "zh": "抽烟。" }] },

  { "id": "L6-W4", "category": "Verbs", "grammarType": "Group II", "kanji": "見ます", "kana": "みます", "romaji": "mimasu", "meaning": "看", "conjugations": { "masu": "見ます", "dictionary": "見る", "te": "見て", "nai": "見ない", "ta": "見た" }, "sentences": [{ "ja": "テレビを見ます。", "zh": "看电视。" }] },

  { "id": "L6-W5", "category": "Verbs", "grammarType": "Group I", "kanji": "聞きます", "kana": "ききます", "romaji": "kikimasu", "meaning": "听；问", "conjugations": { "masu": "聞きます", "dictionary": "聞く", "te": "聞いて", "nai": "聞かない", "ta": "聞いた" }, "sentences": [{ "ja": "音楽を聞きます。", "zh": "听音乐。" }] },

  { "id": "L6-W6", "category": "Verbs", "grammarType": "Group I", "kanji": "読みます", "kana": "よみます", "romaji": "yomimasu", "meaning": "读", "conjugations": { "masu": "読みます", "dictionary": "読む", "te": "読んで", "nai": "読まない", "ta": "読んだ" }, "sentences": [{ "ja": "本を読みます。", "zh": "读书。" }] },

  { "id": "L6-W7", "category": "Verbs", "grammarType": "Group I", "kanji": "書きます", "kana": "かきます", "romaji": "kakimasu", "meaning": "写", "conjugations": { "masu": "書きます", "dictionary": "書く", "te": "書いて", "nai": "書かない", "ta": "書いた" }, "sentences": [{ "ja": "手紙を書きます。", "zh": "写信。" }] },

  { "id": "L6-W8", "category": "Verbs", "grammarType": "Group I", "kanji": "買います", "kana": "かいます", "romaji": "kaimasu", "meaning": "买", "conjugations": { "masu": "買います", "dictionary": "買う", "te": "買って", "nai": "買わない", "ta": "買った" }, "sentences": [{ "ja": "本を買います。", "zh": "买书。" }] },

  { "id": "L6-W9", "category": "Verbs", "grammarType": "Group I", "kanji": "撮ります", "kana": "とります", "romaji": "torimasu", "meaning": "拍（照）", "conjugations": { "masu": "撮ります", "dictionary": "撮る", "te": "撮って", "nai": "撮らない", "ta": "撮った" }, "sentences": [{ "ja": "写真を撮ります。", "zh": "拍照片。" }] },

  { "id": "L6-W10", "category": "Verbs", "grammarType": "Irregular", "kanji": "します", "kana": "します", "romaji": "shimasu", "meaning": "做", "conjugations": { "masu": "します", "dictionary": "する", "te": "して", "nai": "しない", "ta": "した" }, "sentences": [{ "ja": "勉強をします。", "zh": "学习。" }] },

  { "id": "L6-W11", "category": "Nouns", "kanji": "ご飯", "kana": "ごはん", "romaji": "gohan", "meaning": "饭", "sentences": [{ "ja": "ご飯を食べます。", "zh": "吃饭。" }] },

  { "id": "L6-W12", "category": "Nouns", "kanji": "パン", "kana": "パン", "romaji": "pan", "meaning": "面包", "sentences": [{ "ja": "パンを食べます。", "zh": "吃面包。" }] },

  { "id": "L6-W13", "category": "Nouns", "kanji": "水", "kana": "みず", "romaji": "mizu", "meaning": "水", "sentences": [{ "ja": "水を飲みます。", "zh": "喝水。" }] },

  { "id": "L6-W14", "category": "Nouns", "kanji": "お茶", "kana": "おちゃ", "romaji": "ocha", "meaning": "茶", "sentences": [{ "ja": "お茶を飲みます。", "zh": "喝茶。" }] },

  { "id": "L6-W15", "category": "Nouns", "kanji": "コーヒー", "kana": "コーヒー", "romaji": "koohii", "meaning": "咖啡", "sentences": [{ "ja": "コーヒーを飲みます。", "zh": "喝咖啡。" }] },

  { "id": "L6-W16", "category": "Nouns", "kanji": "たばこ", "kana": "たばこ", "romaji": "tabako", "meaning": "香烟", "sentences": [{ "ja": "たばこを吸います。", "zh": "抽烟。" }] },

  { "id": "L6-W17", "category": "Nouns", "kanji": "本", "kana": "ほん", "romaji": "hon", "meaning": "书", "sentences": [{ "ja": "本を読みます。", "zh": "读书。" }] },

  { "id": "L6-W18", "category": "Nouns", "kanji": "新聞", "kana": "しんぶん", "romaji": "shinbun", "meaning": "报纸", "sentences": [{ "ja": "新聞を読みます。", "zh": "读报纸。" }] },

  { "id": "L6-W19", "category": "Nouns", "kanji": "手紙", "kana": "てがみ", "romaji": "tegami", "meaning": "信", "sentences": [{ "ja": "手紙を書きます。", "zh": "写信。" }] },

  { "id": "L6-W20", "category": "Nouns", "kanji": "写真", "kana": "しゃしん", "romaji": "shashin", "meaning": "照片", "sentences": [{ "ja": "写真を撮ります。", "zh": "拍照。" }] }

],
  7: [

  { "id": "L7-W1", "category": "Nouns", "kanji": "切手", "kana": "きって", "romaji": "kitte", "meaning": "邮票", "sentences": [{ "ja": "切手をください。", "zh": "请给我邮票。" }] },

  { "id": "L7-W2", "category": "Nouns", "kanji": "はがき", "kana": "はがき", "romaji": "hagaki", "meaning": "明信片", "sentences": [{ "ja": "はがきを買います。", "zh": "买明信片。" }] },

  { "id": "L7-W3", "category": "Nouns", "kanji": "封筒", "kana": "ふうとう", "romaji": "fuutou", "meaning": "信封", "sentences": [{ "ja": "封筒をください。", "zh": "请给我信封。" }] },

  { "id": "L7-W4", "category": "Nouns", "kanji": "速達", "kana": "そくたつ", "romaji": "sokutatsu", "meaning": "速递", "sentences": [{ "ja": "速達で送ります。", "zh": "用快递寄。" }] },

  { "id": "L7-W5", "category": "Nouns", "kanji": "書留", "kana": "かきとめ", "romaji": "kakitome", "meaning": "挂号信", "sentences": [{ "ja": "書留で出します。", "zh": "用挂号信寄。" }] },

  { "id": "L7-W6", "category": "Nouns", "kanji": "航空便", "kana": "こうくうびん", "romaji": "koukuubin", "meaning": "航空邮件", "sentences": [{ "ja": "航空便で送ります。", "zh": "用航空邮件寄。" }] },

  { "id": "L7-W7", "category": "Nouns", "kanji": "船便", "kana": "ふなびん", "romaji": "funabin", "meaning": "海运邮件", "sentences": [{ "ja": "船便で送ります。", "zh": "用海运寄。" }] },

  { "id": "L7-W8", "category": "Nouns", "kanji": "荷物", "kana": "にもつ", "romaji": "nimotsu", "meaning": "行李，包裹", "sentences": [{ "ja": "荷物を送ります。", "zh": "寄包裹。" }] },

  { "id": "L7-W9", "category": "Nouns", "kanji": "お金", "kana": "おかね", "romaji": "okane", "meaning": "钱", "sentences": [{ "ja": "お金をあげます。", "zh": "给钱。" }] },

  { "id": "L7-W10", "category": "Nouns", "kanji": "プレゼント", "kana": "プレゼント", "romaji": "purezento", "meaning": "礼物", "sentences": [{ "ja": "プレゼントをもらいました。", "zh": "收到了礼物。" }] },

  { "id": "L7-W11", "category": "Verbs", "grammarType": "Group I", "kanji": "送ります", "kana": "おくります", "romaji": "okurimasu", "meaning": "寄送", "conjugations": { "masu": "送ります", "dictionary": "送る", "te": "送って", "nai": "送らない", "ta": "送った" }, "sentences": [{ "ja": "荷物を送ります。", "zh": "寄包裹。" }] },

  { "id": "L7-W12", "category": "Verbs", "grammarType": "Group I", "kanji": "出します", "kana": "だします", "romaji": "dashimasu", "meaning": "寄出；拿出", "conjugations": { "masu": "出します", "dictionary": "出す", "te": "出して", "nai": "出さない", "ta": "出した" }, "sentences": [{ "ja": "手紙を出します。", "zh": "寄信。" }] },

  { "id": "L7-W13", "category": "Verbs", "grammarType": "Group I", "kanji": "もらいます", "kana": "もらいます", "romaji": "moraimasu", "meaning": "收到", "conjugations": { "masu": "もらいます", "dictionary": "もらう", "te": "もらって", "nai": "もらわない", "ta": "もらった" }, "sentences": [{ "ja": "友達から本をもらいました。", "zh": "从朋友那里收到了书。" }] },

  { "id": "L7-W14", "category": "Verbs", "grammarType": "Group II", "kanji": "あげます", "kana": "あげます", "romaji": "agemasu", "meaning": "给（别人）", "conjugations": { "masu": "あげます", "dictionary": "あげる", "te": "あげて", "nai": "あげない", "ta": "あげた" }, "sentences": [{ "ja": "友達に本をあげます。", "zh": "给朋友书。" }] },

  { "id": "L7-W15", "category": "Verbs", "grammarType": "Group II", "kanji": "くれます", "kana": "くれます", "romaji": "kuremasu", "meaning": "给（我）", "conjugations": { "masu": "くれます", "dictionary": "くれる", "te": "くれて", "nai": "くれない", "ta": "くれた" }, "sentences": [{ "ja": "母が花をくれました。", "zh": "妈妈给了我花。" }] },

  { "id": "L7-W16", "category": "Expressions", "kanji": "ください", "kana": "ください", "romaji": "kudasai", "meaning": "请给我", "sentences": [{ "ja": "切手をください。", "zh": "请给我邮票。" }] },

  { "id": "L7-W17", "category": "Expressions", "kanji": "どういたしまして", "kana": "どういたしまして", "romaji": "douitashimashite", "meaning": "不客气", "sentences": [{ "ja": "どういたしまして。", "zh": "不客气。" }] }

],
  8: [

  { "id": "L8-W1", "category": "Adjectives", "kanji": "ハンサムな", "kana": "ハンサムな", "romaji": "hansamu na", "meaning": "英俊的", "sentences": [{ "ja": "田中さんはハンサムな人です。", "zh": "田中先生是个帅气的人。" }] },

  { "id": "L8-W2", "category": "Adjectives", "kanji": "きれいな", "kana": "きれいな", "romaji": "kirei na", "meaning": "漂亮的；干净的", "sentences": [{ "ja": "きれいな町ですね。", "zh": "真是个漂亮的城市。" }] },

  { "id": "L8-W3", "category": "Adjectives", "kanji": "静かな", "kana": "しずかな", "romaji": "shizuka na", "meaning": "安静的", "sentences": [{ "ja": "ここは静かな所です。", "zh": "这里很安静。" }] },

  { "id": "L8-W4", "category": "Adjectives", "kanji": "にぎやかな", "kana": "にぎやかな", "romaji": "nigiyaka na", "meaning": "热闹的", "sentences": [{ "ja": "東京はにぎやかな町です。", "zh": "东京是个热闹的城市。" }] },

  { "id": "L8-W5", "category": "Adjectives", "kanji": "有名な", "kana": "ゆうめいな", "romaji": "yuumei na", "meaning": "有名的", "sentences": [{ "ja": "これは有名な寺です。", "zh": "这是有名的寺庙。" }] },

  { "id": "L8-W6", "category": "Adjectives", "kanji": "親切な", "kana": "しんせつな", "romaji": "shinsetsu na", "meaning": "亲切的", "sentences": [{ "ja": "先生は親切な人です。", "zh": "老师是个亲切的人。" }] },

  { "id": "L8-W7", "category": "Adjectives", "kanji": "元気な", "kana": "げんきな", "romaji": "genki na", "meaning": "健康的；有精神的", "sentences": [{ "ja": "元気な子どもです。", "zh": "是个有精神的孩子。" }] },

  { "id": "L8-W8", "category": "Adjectives", "kanji": "暇な", "kana": "ひまな", "romaji": "hima na", "meaning": "空闲的", "sentences": [{ "ja": "今日は暇です。", "zh": "今天有空。" }] },

  { "id": "L8-W9", "category": "Nouns", "kanji": "山", "kana": "やま", "romaji": "yama", "meaning": "山", "sentences": [{ "ja": "あれは富士山です。", "zh": "那是富士山。" }] },

  { "id": "L8-W10", "category": "Nouns", "kanji": "川", "kana": "かわ", "romaji": "kawa", "meaning": "河", "sentences": [{ "ja": "川がきれいです。", "zh": "河很干净。" }] },

  { "id": "L8-W11", "category": "Nouns", "kanji": "町", "kana": "まち", "romaji": "machi", "meaning": "城市，城镇", "sentences": [{ "ja": "この町は静かです。", "zh": "这座城市很安静。" }] },

  { "id": "L8-W12", "category": "Nouns", "kanji": "食べ物", "kana": "たべもの", "romaji": "tabemono", "meaning": "食物", "sentences": [{ "ja": "日本の食べ物はおいしいです。", "zh": "日本的食物很好吃。" }] },

  { "id": "L8-W13", "category": "Nouns", "kanji": "所", "kana": "ところ", "romaji": "tokoro", "meaning": "地方", "sentences": [{ "ja": "ここはきれいな所です。", "zh": "这里是漂亮的地方。" }] },

  { "id": "L8-W14", "category": "Expressions", "kanji": "どう", "kana": "どう", "romaji": "dou", "meaning": "怎么样", "sentences": [{ "ja": "京都はどうですか。", "zh": "京都怎么样？" }] },

  { "id": "L8-W15", "category": "Expressions", "kanji": "とても", "kana": "とても", "romaji": "totemo", "meaning": "非常", "sentences": [{ "ja": "とてもきれいです。", "zh": "非常漂亮。" }] },

  { "id": "L8-W16", "category": "Expressions", "kanji": "あまり", "kana": "あまり", "romaji": "amari", "meaning": "不太（用于否定）", "sentences": [{ "ja": "あまり静かではありません。", "zh": "不太安静。" }] }

],
  9: [

  { "id": "L9-W1", "category": "Nouns", "kanji": "料理", "kana": "りょうり", "romaji": "ryouri", "meaning": "料理", "sentences": [{ "ja": "日本料理が好きです。", "zh": "喜欢日本料理。" }] },

  { "id": "L9-W2", "category": "Nouns", "kanji": "野球", "kana": "やきゅう", "romaji": "yakyuu", "meaning": "棒球", "sentences": [{ "ja": "野球が好きです。", "zh": "喜欢棒球。" }] },

  { "id": "L9-W3", "category": "Nouns", "kanji": "音楽", "kana": "おんがく", "romaji": "ongaku", "meaning": "音乐", "sentences": [{ "ja": "音楽を聞きます。", "zh": "听音乐。" }] },

  { "id": "L9-W4", "category": "Nouns", "kanji": "スポーツ", "kana": "スポーツ", "romaji": "supootsu", "meaning": "运动", "sentences": [{ "ja": "スポーツが好きです。", "zh": "喜欢运动。" }] },

  { "id": "L9-W5", "category": "Nouns", "kanji": "映画", "kana": "えいが", "romaji": "eiga", "meaning": "电影", "sentences": [{ "ja": "映画を見るのが好きです。", "zh": "喜欢看电影。" }] },

  { "id": "L9-W6", "category": "Nouns", "kanji": "歌", "kana": "うた", "romaji": "uta", "meaning": "歌", "sentences": [{ "ja": "歌が好きです。", "zh": "喜欢唱歌。" }] },

  { "id": "L9-W7", "category": "Nouns", "kanji": "絵", "kana": "え", "romaji": "e", "meaning": "画", "sentences": [{ "ja": "絵を描きます。", "zh": "画画。" }] },

  { "id": "L9-W8", "category": "Nouns", "kanji": "字", "kana": "じ", "romaji": "ji", "meaning": "字", "sentences": [{ "ja": "字がきれいです。", "zh": "字很漂亮。" }] },

  { "id": "L9-W9", "category": "Nouns", "kanji": "運転", "kana": "うんてん", "romaji": "unten", "meaning": "驾驶", "sentences": [{ "ja": "運転ができます。", "zh": "会开车。" }] },

  { "id": "L9-W10", "category": "Nouns", "kanji": "買い物", "kana": "かいもの", "romaji": "kaimono", "meaning": "购物", "sentences": [{ "ja": "買い物が好きです。", "zh": "喜欢购物。" }] },

  { "id": "L9-W11", "category": "Verbs", "grammarType": "Group I", "kanji": "分かります", "kana": "わかります", "romaji": "wakarimasu", "meaning": "明白，懂", "conjugations": { "masu": "分かります", "dictionary": "分かる", "te": "分かって", "nai": "分からない", "ta": "分かった" }, "sentences": [{ "ja": "日本語が分かります。", "zh": "懂日语。" }] },

  { "id": "L9-W12", "category": "Verbs", "grammarType": "Group I", "kanji": "あります", "kana": "あります", "romaji": "arimasu", "meaning": "有（无生命）", "conjugations": { "masu": "あります", "dictionary": "ある", "te": "あって", "nai": "あらない", "ta": "あった" }, "sentences": [{ "ja": "時間があります。", "zh": "有时间。" }] },

  { "id": "L9-W13", "category": "Adjectives", "grammarType": "na-adj", "kanji": "好きです", "kana": "すきです", "romaji": "suki desu", "meaning": "喜欢", "sentences": [{ "ja": "映画が好きです。", "zh": "喜欢电影。" }] },

  { "id": "L9-W14", "category": "Adjectives", "grammarType": "na-adj", "kanji": "嫌いです", "kana": "きらいです", "romaji": "kirai desu", "meaning": "讨厌", "sentences": [{ "ja": "野菜が嫌いです。", "zh": "讨厌蔬菜。" }] },

  { "id": "L9-W15", "category": "Adjectives", "grammarType": "na-adj", "kanji": "上手です", "kana": "じょうずです", "romaji": "jouzu desu", "meaning": "擅长", "sentences": [{ "ja": "料理が上手です。", "zh": "擅长做菜。" }] },

  { "id": "L9-W16", "category": "Adjectives", "grammarType": "na-adj", "kanji": "下手です", "kana": "へたです", "romaji": "heta desu", "meaning": "不擅长", "sentences": [{ "ja": "歌が下手です。", "zh": "不擅长唱歌。" }] },

  { "id": "L9-W17", "category": "Expressions", "kanji": "どうして", "kana": "どうして", "romaji": "doushite", "meaning": "为什么", "sentences": [{ "ja": "どうして来ませんか。", "zh": "为什么不来？" }] }

],
  10: [

  { "id": "L10-W1", "category": "Verbs", "grammarType": "Group I", "kanji": "あります", "kana": "あります", "romaji": "arimasu", "meaning": "有（无生命）", "conjugations": { "masu": "あります", "dictionary": "ある", "te": "あって", "nai": "あらない", "ta": "あった" }, "sentences": [{ "ja": "机の上に本があります。", "zh": "桌子上有书。" }] },

  { "id": "L10-W2", "category": "Verbs", "grammarType": "Group II", "kanji": "います", "kana": "います", "romaji": "imasu", "meaning": "有（人/动物）", "conjugations": { "masu": "います", "dictionary": "いる", "te": "いて", "nai": "いない", "ta": "いた" }, "sentences": [{ "ja": "部屋に猫がいます。", "zh": "房间里有猫。" }] },

  { "id": "L10-W3", "category": "Nouns", "kanji": "上", "kana": "うえ", "romaji": "ue", "meaning": "上面", "sentences": [{ "ja": "机の上に本があります。", "zh": "桌子上有书。" }] },

  { "id": "L10-W4", "category": "Nouns", "kanji": "下", "kana": "した", "romaji": "shita", "meaning": "下面", "sentences": [{ "ja": "机の下に犬がいます。", "zh": "桌子下面有狗。" }] },

  { "id": "L10-W5", "category": "Nouns", "kanji": "前", "kana": "まえ", "romaji": "mae", "meaning": "前面", "sentences": [{ "ja": "駅の前に銀行があります。", "zh": "车站前有银行。" }] },

  { "id": "L10-W6", "category": "Nouns", "kanji": "後ろ", "kana": "うしろ", "romaji": "ushiro", "meaning": "后面", "sentences": [{ "ja": "家の後ろに山があります。", "zh": "房子后面有山。" }] },

  { "id": "L10-W7", "category": "Nouns", "kanji": "右", "kana": "みぎ", "romaji": "migi", "meaning": "右边", "sentences": [{ "ja": "右にポストがあります。", "zh": "右边有邮箱。" }] },

  { "id": "L10-W8", "category": "Nouns", "kanji": "左", "kana": "ひだり", "romaji": "hidari", "meaning": "左边", "sentences": [{ "ja": "左にコンビニがあります。", "zh": "左边有便利店。" }] },

  { "id": "L10-W9", "category": "Nouns", "kanji": "中", "kana": "なか", "romaji": "naka", "meaning": "里面", "sentences": [{ "ja": "かばんの中に財布があります。", "zh": "包里有钱包。" }] },

  { "id": "L10-W10", "category": "Nouns", "kanji": "外", "kana": "そと", "romaji": "soto", "meaning": "外面", "sentences": [{ "ja": "家の外に車があります。", "zh": "房子外有车。" }] },

  { "id": "L10-W11", "category": "Nouns", "kanji": "近く", "kana": "ちかく", "romaji": "chikaku", "meaning": "附近", "sentences": [{ "ja": "駅の近くに店があります。", "zh": "车站附近有商店。" }] },

  { "id": "L10-W12", "category": "Nouns", "kanji": "間", "kana": "あいだ", "romaji": "aida", "meaning": "之间", "sentences": [{ "ja": "銀行と郵便局の間にあります。", "zh": "在银行和邮局之间。" }] },

  { "id": "L10-W13", "category": "Nouns", "kanji": "部屋", "kana": "へや", "romaji": "heya", "meaning": "房间", "sentences": [{ "ja": "部屋に机があります。", "zh": "房间里有桌子。" }] },

  { "id": "L10-W14", "category": "Nouns", "kanji": "机", "kana": "つくえ", "romaji": "tsukue", "meaning": "桌子", "sentences": [{ "ja": "机の上に本があります。", "zh": "桌子上有书。" }] },

  { "id": "L10-W15", "category": "Nouns", "kanji": "いす", "kana": "いす", "romaji": "isu", "meaning": "椅子", "sentences": [{ "ja": "いすの下に猫がいます。", "zh": "椅子下面有猫。" }] },

  { "id": "L10-W16", "category": "Nouns", "kanji": "本棚", "kana": "ほんだな", "romaji": "hondana", "meaning": "书架", "sentences": [{ "ja": "本棚の中に本があります。", "zh": "书架里有书。" }] },

  { "id": "L10-W17", "category": "Nouns", "kanji": "猫", "kana": "ねこ", "romaji": "neko", "meaning": "猫", "sentences": [{ "ja": "部屋に猫がいます。", "zh": "房间里有猫。" }] },

  { "id": "L10-W18", "category": "Nouns", "kanji": "犬", "kana": "いぬ", "romaji": "inu", "meaning": "狗", "sentences": [{ "ja": "庭に犬がいます。", "zh": "院子里有狗。" }] }

],
  11: [

  { "id": "L11-W1", "category": "Verbs", "grammarType": "Group II", "kanji": "います", "kana": "います", "romaji": "imasu", "meaning": "有（人/动物）", "conjugations": { "masu": "います", "dictionary": "いる", "te": "いて", "nai": "いない", "ta": "いた" }, "sentences": [{ "ja": "兄がいます。", "zh": "有哥哥。" }] },

  { "id": "L11-W2", "category": "Verbs", "grammarType": "Group I", "kanji": "あります", "kana": "あります", "romaji": "arimasu", "meaning": "有（无生命）", "conjugations": { "masu": "あります", "dictionary": "ある", "te": "あって", "nai": "あらない", "ta": "あった" }, "sentences": [{ "ja": "車があります。", "zh": "有车。" }] },

  { "id": "L11-W3", "category": "Nouns", "kanji": "兄", "kana": "あに", "romaji": "ani", "meaning": "（我）哥哥", "sentences": [{ "ja": "兄がいます。", "zh": "有哥哥。" }] },

  { "id": "L11-W4", "category": "Nouns", "kanji": "姉", "kana": "あね", "romaji": "ane", "meaning": "（我）姐姐", "sentences": [{ "ja": "姉がいます。", "zh": "有姐姐。" }] },

  { "id": "L11-W5", "category": "Nouns", "kanji": "弟", "kana": "おとうと", "romaji": "otouto", "meaning": "（我）弟弟", "sentences": [{ "ja": "弟がいます。", "zh": "有弟弟。" }] },

  { "id": "L11-W6", "category": "Nouns", "kanji": "妹", "kana": "いもうと", "romaji": "imouto", "meaning": "（我）妹妹", "sentences": [{ "ja": "妹がいます。", "zh": "有妹妹。" }] },

  { "id": "L11-W7", "category": "Nouns", "kanji": "父", "kana": "ちち", "romaji": "chichi", "meaning": "（我）父亲", "sentences": [{ "ja": "父がいます。", "zh": "有父亲。" }] },

  { "id": "L11-W8", "category": "Nouns", "kanji": "母", "kana": "はは", "romaji": "haha", "meaning": "（我）母亲", "sentences": [{ "ja": "母がいます。", "zh": "有母亲。" }] },

  { "id": "L11-W9", "category": "Nouns", "kanji": "家族", "kana": "かぞく", "romaji": "kazoku", "meaning": "家人", "sentences": [{ "ja": "家族がいます。", "zh": "有家人。" }] },

  { "id": "L11-W10", "category": "Nouns", "kanji": "会社", "kana": "かいしゃ", "romaji": "kaisha", "meaning": "公司", "sentences": [{ "ja": "会社があります。", "zh": "有公司。" }] },

  { "id": "L11-W11", "category": "Nouns", "kanji": "公園", "kana": "こうえん", "romaji": "kouen", "meaning": "公园", "sentences": [{ "ja": "公園があります。", "zh": "有公园。" }] },

  { "id": "L11-W12", "category": "Nouns", "kanji": "店", "kana": "みせ", "romaji": "mise", "meaning": "商店", "sentences": [{ "ja": "店があります。", "zh": "有商店。" }] },

  { "id": "L11-W13", "category": "Nouns", "kanji": "上司", "kana": "じょうし", "romaji": "joushi", "meaning": "上司", "sentences": [{ "ja": "上司がいます。", "zh": "有上司。" }] },

  { "id": "L11-W14", "category": "Nouns", "kanji": "友達", "kana": "ともだち", "romaji": "tomodachi", "meaning": "朋友", "sentences": [{ "ja": "友達がいます。", "zh": "有朋友。" }] },

  { "id": "L11-W15", "category": "Expressions", "kanji": "何人", "kana": "なんにん", "romaji": "nannin", "meaning": "几个人", "sentences": [{ "ja": "家族は何人ですか。", "zh": "家里有几口人？" }] },

  { "id": "L11-W16", "category": "Expressions", "kanji": "一人", "kana": "ひとり", "romaji": "hitori", "meaning": "一个人", "sentences": [{ "ja": "兄弟は一人です。", "zh": "有一个兄弟。" }] },

  { "id": "L11-W17", "category": "Expressions", "kanji": "二人", "kana": "ふたり", "romaji": "futari", "meaning": "两个人", "sentences": [{ "ja": "兄弟は二人です。", "zh": "有两个兄弟。" }] }

],
  12: [

  { "id": "L12-W1", "category": "Adjectives", "kanji": "簡単な", "kana": "かんたんな", "romaji": "kantan na", "meaning": "简单的", "sentences": [{ "ja": "これは簡単な問題です。", "zh": "这是简单的问题。" }] },

  { "id": "L12-W2", "category": "Adjectives", "kanji": "近い", "kana": "ちかい", "romaji": "chikai", "meaning": "近的", "sentences": [{ "ja": "駅は近いです。", "zh": "车站很近。" }] },

  { "id": "L12-W3", "category": "Adjectives", "kanji": "遠い", "kana": "とおい", "romaji": "tooi", "meaning": "远的", "sentences": [{ "ja": "会社は遠いです。", "zh": "公司很远。" }] },

  { "id": "L12-W4", "category": "Adjectives", "kanji": "速い", "kana": "はやい", "romaji": "hayai", "meaning": "快的（速度）", "sentences": [{ "ja": "この車は速いです。", "zh": "这辆车很快。" }] },

  { "id": "L12-W5", "category": "Adjectives", "kanji": "遅い", "kana": "おそい", "romaji": "osoi", "meaning": "慢的", "sentences": [{ "ja": "電車は遅いです。", "zh": "电车很慢。" }] },

  { "id": "L12-W6", "category": "Adjectives", "kanji": "多い", "kana": "おおい", "romaji": "ooi", "meaning": "多的", "sentences": [{ "ja": "人が多いです。", "zh": "人很多。" }] },

  { "id": "L12-W7", "category": "Adjectives", "kanji": "少ない", "kana": "すくない", "romaji": "sukunai", "meaning": "少的", "sentences": [{ "ja": "時間が少ないです。", "zh": "时间很少。" }] },

  { "id": "L12-W8", "category": "Adjectives", "kanji": "暖かい", "kana": "あたたかい", "romaji": "atatakai", "meaning": "温暖的", "sentences": [{ "ja": "今日は暖かいです。", "zh": "今天很暖和。" }] },

  { "id": "L12-W9", "category": "Adjectives", "kanji": "涼しい", "kana": "すずしい", "romaji": "suzushii", "meaning": "凉爽的", "sentences": [{ "ja": "秋は涼しいです。", "zh": "秋天很凉爽。" }] },

  { "id": "L12-W10", "category": "Adjectives", "kanji": "甘い", "kana": "あまい", "romaji": "amai", "meaning": "甜的", "sentences": [{ "ja": "このケーキは甘いです。", "zh": "这个蛋糕很甜。" }] },

  { "id": "L12-W11", "category": "Adjectives", "kanji": "辛い", "kana": "からい", "romaji": "karai", "meaning": "辣的", "sentences": [{ "ja": "この料理は辛いです。", "zh": "这个菜很辣。" }] },

  { "id": "L12-W12", "category": "Adjectives", "kanji": "重い", "kana": "おもい", "romaji": "omoi", "meaning": "重的", "sentences": [{ "ja": "この荷物は重いです。", "zh": "这个行李很重。" }] },

  { "id": "L12-W13", "category": "Adjectives", "kanji": "軽い", "kana": "かるい", "romaji": "karui", "meaning": "轻的", "sentences": [{ "ja": "このかばんは軽いです。", "zh": "这个包很轻。" }] },

  { "id": "L12-W14", "category": "Verbs", "grammarType": "Group I", "kanji": "歩きます", "kana": "あるきます", "romaji": "arukimasu", "meaning": "走路", "conjugations": { "masu": "歩きます", "dictionary": "歩く", "te": "歩いて", "nai": "歩かない", "ta": "歩いた" }, "sentences": [{ "ja": "駅まで歩きます。", "zh": "走到车站。" }] },

  { "id": "L12-W15", "category": "Verbs", "grammarType": "Group I", "kanji": "飛びます", "kana": "とびます", "romaji": "tobimasu", "meaning": "飞", "conjugations": { "masu": "飛びます", "dictionary": "飛ぶ", "te": "飛んで", "nai": "飛ばない", "ta": "飛んだ" }, "sentences": [{ "ja": "鳥が飛びます。", "zh": "鸟飞。" }] },

  { "id": "L12-W16", "category": "Verbs", "grammarType": "Group I", "kanji": "泳ぎます", "kana": "およぎます", "romaji": "oyogimasu", "meaning": "游泳", "conjugations": { "masu": "泳ぎます", "dictionary": "泳ぐ", "te": "泳いで", "nai": "泳がない", "ta": "泳いだ" }, "sentences": [{ "ja": "海で泳ぎます。", "zh": "在海里游泳。" }] }

],
  13: [

  { "id": "L13-W1", "category": "Verbs", "grammarType": "Group I", "kanji": "遊びます", "kana": "あそびます", "romaji": "asobimasu", "meaning": "玩，玩耍", "conjugations": { "masu": "遊びます", "dictionary": "遊ぶ", "te": "遊んで", "nai": "遊ばない", "ta": "遊んだ" }, "sentences": [{ "ja": "友達と遊びます。", "zh": "和朋友玩。" }] },

  { "id": "L13-W2", "category": "Verbs", "grammarType": "Group I", "kanji": "泳ぎます", "kana": "およぎます", "romaji": "oyogimasu", "meaning": "游泳", "conjugations": { "masu": "泳ぎます", "dictionary": "泳ぐ", "te": "泳いで", "nai": "泳がない", "ta": "泳いだ" }, "sentences": [{ "ja": "海で泳ぎます。", "zh": "在海里游泳。" }] },

  { "id": "L13-W3", "category": "Verbs", "grammarType": "Group II", "kanji": "迎えます", "kana": "むかえます", "romaji": "mukaemasu", "meaning": "迎接", "conjugations": { "masu": "迎えます", "dictionary": "迎える", "te": "迎えて", "nai": "迎えない", "ta": "迎えた" }, "sentences": [{ "ja": "駅へ友達を迎えます。", "zh": "去车站接朋友。" }] },

  { "id": "L13-W4", "category": "Verbs", "grammarType": "Group II", "kanji": "疲れます", "kana": "つかれます", "romaji": "tsukaremasu", "meaning": "累", "conjugations": { "masu": "疲れます", "dictionary": "疲れる", "te": "疲れて", "nai": "疲れない", "ta": "疲れた" }, "sentences": [{ "ja": "仕事で疲れました。", "zh": "工作累了。" }] },

  { "id": "L13-W5", "category": "Verbs", "grammarType": "Group II", "kanji": "出かけます", "kana": "でかけます", "romaji": "dekakemasu", "meaning": "外出", "conjugations": { "masu": "出かけます", "dictionary": "出かける", "te": "出かけて", "nai": "出かけない", "ta": "出かけた" }, "sentences": [{ "ja": "日曜日に出かけます。", "zh": "星期天外出。" }] },

  { "id": "L13-W6", "category": "Verbs", "grammarType": "Irregular", "kanji": "買い物します", "kana": "かいものします", "romaji": "kaimono shimasu", "meaning": "购物", "conjugations": { "masu": "買い物します", "dictionary": "買い物する", "te": "買い物して", "nai": "買い物しない", "ta": "買い物した" }, "sentences": [{ "ja": "デパートで買い物します。", "zh": "在百货公司购物。" }] },

  { "id": "L13-W7", "category": "Nouns", "kanji": "公園", "kana": "こうえん", "romaji": "kouen", "meaning": "公园", "sentences": [{ "ja": "公園で遊びます。", "zh": "在公园玩。" }] },

  { "id": "L13-W8", "category": "Nouns", "kanji": "川", "kana": "かわ", "romaji": "kawa", "meaning": "河", "sentences": [{ "ja": "川で泳ぎます。", "zh": "在河里游泳。" }] },

  { "id": "L13-W9", "category": "Nouns", "kanji": "美術館", "kana": "びじゅつかん", "romaji": "bijutsukan", "meaning": "美术馆", "sentences": [{ "ja": "美術館へ行きます。", "zh": "去美术馆。" }] },

  { "id": "L13-W10", "category": "Nouns", "kanji": "博物館", "kana": "はくぶつかん", "romaji": "hakubutsukan", "meaning": "博物馆", "sentences": [{ "ja": "博物館へ行きます。", "zh": "去博物馆。" }] },

  { "id": "L13-W11", "category": "Nouns", "kanji": "図書館", "kana": "としょかん", "romaji": "toshokan", "meaning": "图书馆", "sentences": [{ "ja": "図書館で勉強します。", "zh": "在图书馆学习。" }] },

  { "id": "L13-W12", "category": "Nouns", "kanji": "映画", "kana": "えいが", "romaji": "eiga", "meaning": "电影", "sentences": [{ "ja": "映画を見ます。", "zh": "看电影。" }] },

  { "id": "L13-W13", "category": "Nouns", "kanji": "一人で", "kana": "ひとりで", "romaji": "hitori de", "meaning": "一个人", "sentences": [{ "ja": "一人で行きます。", "zh": "一个人去。" }] },

  { "id": "L13-W14", "category": "Nouns", "kanji": "家族で", "kana": "かぞくで", "romaji": "kazoku de", "meaning": "和家人一起", "sentences": [{ "ja": "家族で旅行します。", "zh": "和家人旅行。" }] },

  { "id": "L13-W15", "category": "Expressions", "kanji": "どうやって", "kana": "どうやって", "romaji": "douyatte", "meaning": "怎么做", "sentences": [{ "ja": "どうやって行きますか。", "zh": "怎么去？" }] },

  { "id": "L13-W16", "category": "Expressions", "kanji": "どのくらい", "kana": "どのくらい", "romaji": "donokurai", "meaning": "多久，多长时间", "sentences": [{ "ja": "どのくらいかかりますか。", "zh": "要多久？" }] },

  { "id": "L13-W17", "category": "Expressions", "kanji": "それから", "kana": "それから", "romaji": "sorekara", "meaning": "然后", "sentences": [{ "ja": "昼ご飯を食べます。それから勉強します。", "zh": "吃午饭，然后学习。" }] }

],
  14: [
    { "id": "L14-W1", "category": "Verbs", "grammarType": "Group II", "kanji": "つけます", "kana": "つけます", "romaji": "tsukemasu", "meaning": "开（灯、空调等）", "conjugations": { "masu": "つけます", "dictionary": "つける", "te": "つけて", "nai": "つけない", "ta": "つけた" }, "sentences": [{ "ja": "電気をつけます。", "zh": "开灯。" }] },
    { "id": "L14-W2", "category": "Verbs", "grammarType": "Group I", "kanji": "消します", "kana": "けします", "romaji": "keshimasu", "meaning": "关，切断（电源）", "conjugations": { "masu": "消します", "dictionary": "消す", "te": "消して", "nai": "消さない", "ta": "消した" }, "sentences": [{ "ja": "テレビを消してください。", "zh": "请关掉电视。" }] },
    { "id": "L14-W3", "category": "Verbs", "grammarType": "Group II", "kanji": "開けます", "kana": "あけます", "romaji": "akemasu", "meaning": "打开（窗、门）", "conjugations": { "masu": "開けます", "dictionary": "開ける", "te": "開けて", "nai": "開けない", "ta": "開けた" }, "sentences": [{ "ja": "窓を開けましょうか。", "zh": "要我打开窗户吗？" }] },
    { "id": "L14-W4", "category": "Verbs", "grammarType": "Group II", "kanji": "閉めます", "kana": "しめます", "romaji": "shimemasu", "meaning": "关闭（窗、门）", "conjugations": { "masu": "閉めます", "dictionary": "閉める", "te": "閉めて", "nai": "閉めない", "ta": "閉めた" }, "sentences": [{ "ja": "ドアを閉めてください。", "zh": "请关门。" }] },
    { "id": "L14-W5", "category": "Verbs", "grammarType": "Group I", "kanji": "急ぎます", "kana": "いそぎます", "romaji": "isogimasu", "meaning": "急忙，赶紧", "conjugations": { "masu": "急ぎます", "dictionary": "急ぐ", "te": "急いで", "nai": "急がない", "ta": "急いだ" }, "sentences": [{ "ja": "急いでください。", "zh": "请快一点。" }] },
    { "id": "L14-W6", "category": "Verbs", "grammarType": "Group I", "kanji": "待ちます", "kana": "まちます", "romaji": "machimasu", "meaning": "等待", "conjugations": { "masu": "待ちます", "dictionary": "待つ", "te": "待って", "nai": "待たない", "ta": "待った" }, "sentences": [{ "ja": "ちょっと待ってください。", "zh": "请等一下。" }] },
    { "id": "L14-W7", "category": "Verbs", "grammarType": "Group I", "kanji": "持ちます", "kana": "もちます", "romaji": "mochimasu", "meaning": "拿，持有", "conjugations": { "masu": "持ちます", "dictionary": "持つ", "te": "持って", "nai": "持たない", "ta": "持った" }, "sentences": [{ "ja": "荷物を持ちましょうか。", "zh": "我来帮你拿行李吧？" }] },
    { "id": "L14-W8", "category": "Verbs", "grammarType": "Group I", "kanji": "取ります", "kana": "とります", "romaji": "torimasu", "meaning": "拿，传递", "conjugations": { "masu": "取ります", "dictionary": "取る", "te": "取って", "nai": "取らない", "ta": "取った" }, "sentences": [{ "ja": "塩を取ってください。", "zh": "请把盐拿给我。" }] },
    { "id": "L14-W9", "category": "Verbs", "grammarType": "Group I", "kanji": "手伝います", "kana": "てつだいます", "romaji": "tetsudaimasu", "meaning": "帮忙，帮助", "conjugations": { "masu": "手伝います", "dictionary": "手伝う", "te": "手伝って", "nai": "手伝わない", "ta": "手伝った" }, "sentences": [{ "ja": "仕事を手伝ってください。", "zh": "请帮我工作。" }] },
    { "id": "L14-W10", "category": "Verbs", "grammarType": "Group I", "kanji": "呼びます", "kana": "よびます", "romaji": "yobimasu", "meaning": "呼叫，叫（出租车等）", "conjugations": { "masu": "呼びます", "dictionary": "呼ぶ", "te": "呼んで", "nai": "呼ばない", "ta": "呼んだ" }, "sentences": [{ "ja": "タクシーを呼びます。", "zh": "叫出租车。" }] },
    { "id": "L14-W11", "category": "Verbs", "grammarType": "Group I", "kanji": "話します", "kana": "はなします", "romaji": "hanashimasu", "meaning": "说话，讲", "conjugations": { "masu": "話します", "dictionary": "話す", "te": "話して", "nai": "話さない", "ta": "話した" }, "sentences": [{ "ja": "ゆっくり話してください。", "zh": "请慢慢说。" }] },
    { "id": "L14-W12", "category": "Verbs", "grammarType": "Group I", "kanji": "使います", "kana": "つかいます", "romaji": "tsukaimasu", "meaning": "使用", "conjugations": { "masu": "使います", "dictionary": "使う", "te": "使って", "nai": "使わない", "ta": "使った" }, "sentences": [{ "ja": "ペンを使ってもいいですか。", "zh": "可以使用这支笔吗？" }] },
    { "id": "L14-W13", "category": "Verbs", "grammarType": "Group II", "kanji": "止めます", "kana": "とめます", "romaji": "tomemasu", "meaning": "停下，停车", "conjugations": { "masu": "止めます", "dictionary": "止める", "te": "止めて", "nai": "止めない", "ta": "止めた" }, "sentences": [{ "ja": "ここに車を止めてください。", "zh": "请在这里停车。" }] },
    { "id": "L14-W14", "category": "Verbs", "grammarType": "Group II", "kanji": "見せます", "kana": "みせます", "romaji": "misemasu", "meaning": "出示，给...看", "conjugations": { "masu": "見せます", "dictionary": "見せる", "te": "見せて", "nai": "見せない", "ta": "見せた" }, "sentences": [{ "ja": "パスポートを見せてください。", "zh": "请出示护照。" }] },
    { "id": "L14-W15", "category": "Verbs", "grammarType": "Group II", "kanji": "教えます", "kana": "おしえます", "romaji": "oshiemasu", "meaning": "告诉，教（地址、语言等）", "conjugations": { "masu": "教えます", "dictionary": "教える", "te": "教えて", "nai": "教えない", "ta": "教えた" }, "sentences": [{ "ja": "住所を教えてください。", "zh": "请告诉我地址。" }] },
    { "id": "L14-W16", "category": "Verbs", "grammarType": "Group I", "kanji": "座ります", "kana": "すわります", "romaji": "suwarimasu", "meaning": "坐下", "conjugations": { "masu": "座ります", "dictionary": "座る", "te": "座って", "nai": "座らない", "ta": "座った" }, "sentences": [{ "ja": "ここに座ってください。", "zh": "请坐在这里。" }] },
    { "id": "L14-W17", "category": "Verbs", "grammarType": "Group I", "kanji": "立ちます", "kana": "たちます", "romaji": "tachimasu", "meaning": "站立", "conjugations": { "masu": "立ちます", "dictionary": "立つ", "te": "立って", "nai": "立たない", "ta": "立った" }, "sentences": [{ "ja": "立たないでください。", "zh": "请不要站起来。" }] },
    { "id": "L14-W18", "category": "Verbs", "grammarType": "Group I", "kanji": "入ります", "kana": "はいります", "romaji": "hairimasu", "meaning": "进入", "conjugations": { "masu": "入ります", "dictionary": "入る", "te": "入って", "nai": "入らない", "ta": "入った" }, "sentences": [{ "ja": "喫茶店に入ります。", "zh": "进咖啡店。" }] },
    { "id": "L14-W19", "category": "Verbs", "grammarType": "Group II", "kanji": "出ます", "kana": "でます", "romaji": "demasu", "meaning": "出去，离开", "conjugations": { "masu": "出ます", "dictionary": "出る", "te": "出て", "nai": "出ない", "ta": "出た" }, "sentences": [{ "ja": "喫茶店を出ます。", "zh": "离开咖啡店。" }] },
    { "id": "L14-W20", "category": "Verbs", "grammarType": "Group I", "kanji": "降ります", "kana": "ふります", "romaji": "furimasu", "meaning": "降（雨、雪）", "conjugations": { "masu": "降ります", "dictionary": "降る", "te": "降って", "nai": "降らない", "ta": "降った" }, "sentences": [{ "ja": "雨が降っています。", "zh": "正在下雨。" }] },
    { "id": "L14-W21", "category": "Verbs", "grammarType": "Irregular", "kanji": "コピーします", "kana": "コピーします", "romaji": "kopiishimasu", "meaning": "复印", "conjugations": { "masu": "コピーします", "dictionary": "コピーする", "te": "コピーして", "nai": "コピーしない", "ta": "コピーした" }, "sentences": [{ "ja": "資料をコピーします。", "zh": "复印资料。" }] },
    { "id": "L14-W22", "category": "Nouns", "kanji": "電気", "kana": "でんき", "romaji": "denki", "meaning": "电，电灯", "sentences": [{ "ja": "電気を消します。", "zh": "关灯。" }] },
    { "id": "L14-W23", "category": "Nouns", "kanji": "住所", "kana": "じゅうしょ", "romaji": "juusho", "meaning": "地址", "sentences": [{ "ja": "住所を書きます。", "zh": "写地址。" }] },
    { "id": "L14-W24", "category": "Nouns", "kanji": "地図", "kana": "ちず", "romaji": "chizu", "meaning": "地图", "sentences": [{ "ja": "地図を書いてください。", "zh": "请画地图。" }] },
    { "id": "L14-W25", "category": "Expressions", "kanji": "真っ直ぐ", "kana": "まっすぐ", "romaji": "massugu", "meaning": "直，一直", "sentences": [{ "ja": "真っ直ぐ行ってください。", "zh": "请直走。" }] },
    { "id": "L14-W26", "category": "Expressions", "kanji": "ゆっくり", "kana": "ゆっくり", "romaji": "yukkuri", "meaning": "慢慢地", "sentences": [{ "ja": "ゆっくり休んでください。", "zh": "请好好休息。" }] }
  ],
  15: [
    { "id": "L15-W1", "category": "Verbs", "grammarType": "Group I", "kanji": "置きます", "kana": "おきます", "romaji": "okimasu", "meaning": "放置，放在", "conjugations": { "masu": "置きます", "dictionary": "おく", "te": "おいて", "nai": "おかない", "ta": "おいた" }, "sentences": [{ "ja": "ここに荷物を置いてください。", "zh": "请把行李放在这儿。" }, { "ja": "辞書は机の上に置いてあります。", "zh": "字典放在桌子上。" }] },
    { "id": "L15-W2", "category": "Verbs", "grammarType": "Group I", "kanji": "作ります", "kana": "つくります", "romaji": "tsukurimasu", "meaning": "做，制造", "conjugations": { "masu": "作ります", "dictionary": "つくる", "te": "つくって", "nai": "つくらない", "ta": "つくった" }, "sentences": [{ "ja": "母は料理を作っています。", "zh": "母亲正在做饭。" }, { "ja": "この工場で車を作っています。", "zh": "这个工厂在制造汽车。" }] },
    { "id": "L15-W3", "category": "Verbs", "grammarType": "Group I", "kanji": "売ります", "kana": "うります", "romaji": "urimasu", "meaning": "卖，销售", "conjugations": { "masu": "売ります", "dictionary": "うる", "te": "うって", "nai": "うらない", "ta": "うった" }, "sentences": [{ "ja": "スーパーで野菜を売っています。", "zh": "超市里在卖蔬菜。" }, { "ja": "古い本を売りました。", "zh": "把旧书卖了。" }] },
    { "id": "L15-W4", "category": "Verbs", "grammarType": "Group I", "kanji": "知ります", "kana": "しります", "romaji": "shirimasu", "meaning": "知道，认识", "conjugations": { "masu": "知ります", "dictionary": "しる", "te": "しって", "nai": "しらない", "ta": "しった" }, "sentences": [{ "ja": "そのニュースを知っていますか。", "zh": "你知道那个新闻吗？" }, { "ja": "いいえ、知りません。", "zh": "不，不知道。" }] },
    { "id": "L15-W5", "category": "Verbs", "grammarType": "Group I", "kanji": "住みます", "kana": "すみます", "romaji": "sumimasu", "meaning": "居住", "conjugations": { "masu": "住みます", "dictionary": "すむ", "te": "すんで", "nai": "すまない", "ta": "すんだ" }, "sentences": [{ "ja": "私は東京に住んでいます。", "zh": "我住在东京。" }, { "ja": "どこに住んでいますか。", "zh": "你住在哪里？" }] },
    { "id": "L15-W6", "category": "Verbs", "grammarType": "Irregular", "kanji": "研究します", "kana": "けんきゅうします", "romaji": "kenkyuushimasu", "meaning": "研究", "conjugations": { "masu": "研究します", "dictionary": "けんきゅうする", "te": "けんきゅうして", "nai": "けんきゅうしない", "ta": "けんきゅうした" }, "sentences": [{ "ja": "大学で経済を研究しています。", "zh": "在大学研究经济。" }, { "ja": "日本の文化を研究したいです。", "zh": "我想研究日本文化。" }] },
    { "id": "L15-W7", "category": "Nouns", "kanji": "資料", "kana": "しりょう", "romaji": "shiryou", "meaning": "资料", "sentences": [{ "ja": "会議の資料を作ります。", "zh": "准备会议资料。" }, { "ja": "資料をコピーしてください。", "zh": "请复印资料。" }] },
    { "id": "L15-W8", "category": "Nouns", "kanji": "カタログ", "kana": "カタログ", "romaji": "katarogu", "meaning": "目录", "sentences": [{ "ja": "新しい車のカタログです。", "zh": "是新车的目录。" }, { "ja": "カタログを見て選びます。", "zh": "看目录挑选。" }] },
    { "id": "L15-W9", "category": "Nouns", "kanji": "時刻表", "kana": "じこくひょう", "romaji": "jikokuhyou", "meaning": "时刻表", "sentences": [{ "ja": "電車の時刻表を調べます。", "zh": "查电车时刻表。" }, { "ja": "時刻表はどこにありますか。", "zh": "时刻表在哪儿？" }] },
    { "id": "L15-W10", "category": "Nouns", "kanji": "服", "kana": "ふく", "romaji": "fuku", "meaning": "衣服", "sentences": [{ "ja": "新しい服を買いたいです。", "zh": "我想买新衣服。" }, { "ja": "この服はとてもきれいです。", "zh": "这件衣服非常漂亮。" }] },
    { "id": "L15-W11", "category": "Nouns", "kanji": "製品", "kana": "せいひん", "romaji": "seihin", "meaning": "制品，产品", "sentences": [{ "ja": "日本製品は質がいいです。", "zh": "日本产品质量很好。" }, { "ja": "電気製品の店へ行きます。", "zh": "去电器商店。" }] },
    { "id": "L15-W12", "category": "Nouns", "kanji": "ソフト", "kana": "ソフト", "romaji": "sofuto", "meaning": "软件", "sentences": [{ "ja": "コンピュータのソフトを作ります。", "zh": "开发电脑软件。" }, { "ja": "いいソフトが欲しいです。", "zh": "想要好软件。" }] },
    { "id": "L15-W13", "category": "Nouns", "kanji": "専門", "kana": "せんもん", "romaji": "senmon", "meaning": "专业", "sentences": [{ "ja": "私の専門は日本語です。", "zh": "我的专业是日语。" }, { "ja": "ご専門は何ですか。", "zh": "您的专业是什么？" }] },
    { "id": "L15-W14", "category": "Nouns", "kanji": "歯医者", "kana": "はいしゃ", "romaji": "haisha", "meaning": "牙医", "sentences": [{ "ja": "歯医者へ行かなければなりません。", "zh": "必须去看牙医。" }, { "ja": "あの歯医者は上手です。", "zh": "那位牙医医术高明。" }] },
    { "id": "L15-W15", "category": "Nouns", "kanji": "床屋", "kana": "とこや", "romaji": "tokoya", "meaning": "理发店", "sentences": [{ "ja": "床屋で髪を切りました。", "zh": "在理发店理了发。" }, { "ja": "近くにいい床屋がありますか。", "zh": "附近有好理发店吗？" }] },
    { "id": "L15-W16", "category": "Nouns", "kanji": "プレイガイド", "kana": "プレイガイド", "romaji": "pureigaido", "meaning": "（剧院、音乐厅等的）票务代理店", "sentences": [{ "ja": "プレイガイドでチケットを買います。", "zh": "在票务代理店买票。" }, { "ja": "プレイガイドはあそこにあります。", "zh": "票务店在那儿。" }] },
    { "id": "L15-W17", "category": "Nouns", "kanji": "独身", "kana": "どくしん", "romaji": "dokushin", "meaning": "单身，未婚", "sentences": [{ "ja": "私はまだ独身です。", "zh": "我还单身。" }, { "ja": "ミラーさんは独身ですか。", "zh": "米勒先生是单身吗？" }] },
    { "id": "L15-W18", "category": "Nouns", "kanji": "高校", "kana": "こうこう", "romaji": "koukou", "meaning": "高中", "sentences": [{ "ja": "高校の時、サッカーをしていました。", "zh": "高中的时候踢足球。" }, { "ja": "あの人は高校の先生です。", "zh": "那个人是高中老师。" }] },
    { "id": "L15-W19", "category": "Expressions", "kanji": "特に", "kana": "とくに", "romaji": "toku ni", "meaning": "特别，尤其", "sentences": [{ "ja": "日本料理、特に寿司が好きです。", "zh": "喜欢日本料理，尤其是寿司。" }, { "ja": "昨日は特に忙しかったです。", "zh": "昨天特别忙。" }] },
    { "id": "L15-W20", "category": "Verbs", "grammarType": "Group I", "kanji": "思い出します", "kana": "おもいだします", "romaji": "omoidashimasu", "meaning": "想起，回忆起", "conjugations": { "masu": "思い出します", "dictionary": "おもいだす", "te": "おもいだして", "nai": "おもいださない", "ta": "おもいだした" }, "sentences": [{ "ja": "名前を思い出しました。", "zh": "我想起名字来了。" }, { "ja": "子供の時を思い出します。", "zh": "回忆起小时候。" }] },
    { "id": "L15-W21", "category": "Nouns", "kanji": "ご家族", "kana": "ごかぞく", "romaji": "gokazoku", "meaning": "（他人的）家属，家人", "sentences": [{ "ja": "ご家族はどちらですか。", "zh": "您家里人在哪里？" }, { "ja": "ご家族によろしくお伝えください。", "zh": "请向您的家人代好。" }] },
    { "id": "L15-W22", "category": "Verbs", "grammarType": "Group I", "kanji": "いらっしゃいます", "kana": "いらっしゃいます", "romaji": "irasshaimasu", "meaning": "（います的礼貌形）", "conjugations": { "masu": "いらっしゃいます", "dictionary": "いらっしゃる", "te": "いらっしゃって", "nai": "いらっしゃらない", "ta": "いらっしゃった" }, "sentences": [{ "ja": "ご主人はどちらにいらっしゃいますか。", "zh": "您先生在哪里？" }, { "ja": "先生はいらっしゃいますか。", "zh": "老师在吗？" }] }
  ],
  16: [
    { "id": "L16-W1", "category": "Verbs", "grammarType": "Group I", "kanji": "乗ります", "kana": "のります", "romaji": "norimasu", "meaning": "乘坐，搭乘", "conjugations": { "masu": "乗ります", "dictionary": "のる", "te": "のって", "nai": "のらない", "ta": "のった" }, "sentences": [{ "ja": "電車に乗ります。", "zh": "乘坐电车。" }, { "ja": "バスに乗って、学校へ行きます。", "zh": "乘巴士去学校。" }] },
    { "id": "L16-W2", "category": "Verbs", "grammarType": "Group II", "kanji": "降ります", "kana": "おります", "romaji": "orimasu", "meaning": "下（车）", "conjugations": { "masu": "降ります", "dictionary": "おりる", "te": "おりて", "nai": "おりない", "ta": "おりた" }, "sentences": [{ "ja": "次の駅で降ります。", "zh": "在下一站下车。" }, { "ja": "電車を降りました。", "zh": "下了电车。" }] },
    { "id": "L16-W3", "category": "Verbs", "grammarType": "Group II", "kanji": "乗り換えます", "kana": "のりかえます", "romaji": "norikaemasu", "meaning": "换乘", "conjugations": { "masu": "乗り換えます", "dictionary": "のりかえる", "te": "のりかえて", "nai": "のりかえない", "ta": "のりかえた" }, "sentences": [{ "ja": "東京駅で新幹線に乗り換えます。", "zh": "在东京站换乘新干线。" }, { "ja": "地下鉄に乗り換えてください。", "zh": "请换乘地铁。" }] },
    { "id": "L16-W4", "category": "Verbs", "grammarType": "Group II", "kanji": "浴びます", "kana": "あびます", "romaji": "abimasu", "meaning": "淋浴", "conjugations": { "masu": "浴びます", "dictionary": "あびる", "te": "あびて", "nai": "あびない", "ta": "あびた" }, "sentences": [{ "ja": "シャワーを浴びます。", "zh": "淋浴。" }, { "ja": "毎朝シャワーを浴びますか。", "zh": "你每天早上都淋浴吗？" }] },
    { "id": "L16-W5", "category": "Verbs", "grammarType": "Group II", "kanji": "入れます", "kana": "いれます", "romaji": "iremasu", "meaning": "放入，放进", "conjugations": { "masu": "入れます", "dictionary": "いれる", "te": "いれて", "nai": "いれない", "ta": "いれた" }, "sentences": [{ "ja": "砂糖を入れますか。", "zh": "要放糖吗？" }, { "ja": "かばんに本を入れました。", "zh": "把书放进了包里。" }] },
    { "id": "L16-W6", "category": "Verbs", "grammarType": "Group I", "kanji": "出します", "kana": "だします", "romaji": "dashimasu", "meaning": "拿出，取出", "conjugations": { "masu": "出します", "dictionary": "だす", "te": "だして", "nai": "ださない", "ta": "だした" }, "sentences": [{ "ja": "財布からお金を出します。", "zh": "从钱包里拿出钱。" }, { "ja": "レポートを出してください。", "zh": "请提交报告。" }] },
    { "id": "L16-W7", "category": "Verbs", "grammarType": "Group I", "kanji": "下ろします", "kana": "おろします", "romaji": "oroshimasu", "meaning": "取（钱）", "conjugations": { "masu": "下ろします", "dictionary": "おろす", "te": "おろして", "nai": "おろさない", "ta": "おろした" }, "sentences": [{ "ja": "銀行でお金を下ろします。", "zh": "在银行取钱。" }, { "ja": "ATMでお金を下ろせます。", "zh": "可以在ATM取钱。" }] },
    { "id": "L16-W8", "category": "Verbs", "grammarType": "Group I", "kanji": "入ります", "kana": "はいります", "romaji": "hairimasu", "meaning": "进入", "conjugations": { "masu": "入ります", "dictionary": "はいる", "te": "はいって", "nai": "はいらない", "ta": "はいった" }, "sentences": [{ "ja": "大学に入ります。", "zh": "上大学。" }, { "ja": "喫茶店に入りましょう。", "zh": "我们进咖啡店吧。" }] },
    { "id": "L16-W9", "category": "Verbs", "grammarType": "Group II", "kanji": "出ます", "kana": "でます", "romaji": "demasu", "meaning": "出，出去", "conjugations": { "masu": "出ます", "dictionary": "でる", "te": "でて", "nai": "でない", "ta": "でた" }, "sentences": [{ "ja": "大学を出ます。", "zh": "大学毕业。" }, { "ja": "部屋から出てください。", "zh": "请从房间里出去。" }] },
    { "id": "L16-W10", "category": "Verbs", "grammarType": "Group I", "kanji": "押します", "kana": "おします", "romaji": "oshimasu", "meaning": "按，推", "conjugations": { "masu": "押します", "dictionary": "おす", "te": "おして", "nai": "おさない", "ta": "おした" }, "sentences": [{ "ja": "このボタンを押してください。", "zh": "请按这个按钮。" }, { "ja": "ドアを押します。", "zh": "推门。" }] },
    { "id": "L16-W11", "category": "Verbs", "grammarType": "Irregular", "kanji": "見学します", "kana": "けんがくします", "romaji": "kengakushimasu", "meaning": "参观", "conjugations": { "masu": "見学します", "dictionary": "けんがくする", "te": "けんがくして", "nai": "けんがくしない", "ta": "けんがくした" }, "sentences": [{ "ja": "工場を見学します。", "zh": "参观工厂。" }, { "ja": "明日、博物館を見学する予定です。", "zh": "明天计划参观博物馆。" }] },
    { "id": "L16-W12", "category": "Verbs", "grammarType": "Irregular", "kanji": "電話します", "kana": "でんわします", "romaji": "denwashimasu", "meaning": "打电话", "conjugations": { "masu": "電話します", "dictionary": "でんわする", "te": "でんわして", "nai": "でんわしない", "ta": "でんわした" }, "sentences": [{ "ja": "友達に電話します。", "zh": "给朋友打电话。" }, { "ja": "後で電話してください。", "zh": "请稍后打电话。" }] },
    { "id": "L16-W13", "category": "Adjectives", "grammarType": "i-adj", "kanji": "若い", "kana": "わかい", "romaji": "wakai", "meaning": "年轻", "sentences": [{ "ja": "あの人はまだ若いです。", "zh": "那个人还很年轻。" }, { "ja": "若い時にたくさん勉強しました。", "zh": "年轻的时候学了很多东西。" }] },
    { "id": "L16-W14", "category": "Adjectives", "grammarType": "i-adj", "kanji": "長い", "kana": "ながい", "romaji": "nagai", "meaning": "长", "sentences": [{ "ja": "髪が長いです。", "zh": "头发很长。" }, { "ja": "長い小説を読みました。", "zh": "读了很长的小说。" }] },
    { "id": "L16-W15", "category": "Adjectives", "grammarType": "i-adj", "kanji": "短い", "kana": "みじかい", "romaji": "mijikai", "meaning": "短", "sentences": [{ "ja": "スカートが短いです。", "zh": "裙子很短。" }, { "ja": "短い手紙を書きました。", "zh": "写了封短信息。" }] },
    { "id": "L16-W16", "category": "Adjectives", "grammarType": "i-adj", "kanji": "明るい", "kana": "あかるい", "romaji": "akarui", "meaning": "明亮", "sentences": [{ "ja": "この部屋は明るいです。", "zh": "这个房间很明亮。" }, { "ja": "明るい未来を信じています。", "zh": "相信光明的未来。" }] },
    { "id": "L16-W17", "category": "Adjectives", "grammarType": "i-adj", "kanji": "暗い", "kana": "くらい", "romaji": "kurai", "meaning": "黑暗", "sentences": [{ "ja": "夜道は暗くて、危ないです。", "zh": "夜路很黑，很危险。" }, { "ja": "暗い部屋で本を読まないでください。", "zh": "请不要在昏暗的房间里看书。" }] },
    { "id": "L16-W18", "category": "Nouns", "kanji": "体", "kana": "からだ", "romaji": "karada", "meaning": "身体", "sentences": [{ "ja": "体に気を付けてください。", "zh": "请注意身体。" }, { "ja": "運動は体にいいです。", "zh": "运动对身体好。" }] },
    { "id": "L16-W19", "category": "Nouns", "kanji": "頭", "kana": "あたま", "romaji": "atama", "meaning": "头脑", "sentences": [{ "ja": "頭がいいです。", "zh": "头脑很好。" }, { "ja": "頭が痛いです。", "zh": "头痛。" }] },
    { "id": "L16-W20", "category": "Nouns", "kanji": "髪", "kana": "かみ", "romaji": "kami", "meaning": "头发", "sentences": [{ "ja": "髪を切りました。", "zh": "剪了头发。" }, { "ja": "彼女の髪はきれいです。", "zh": "她的头发很漂亮。" }] },
    { "id": "L16-W21", "category": "Nouns", "kanji": "顔", "kana": "かお", "romaji": "kao", "meaning": "脸", "sentences": [{ "ja": "毎朝顔を洗います。", "zh": "每天早上洗脸。" }, { "ja": "顔色が悪いですね。", "zh": "脸色不好啊。" }] },
    { "id": "L16-W22", "category": "Nouns", "kanji": "目", "kana": "め", "romaji": "me", "meaning": "眼睛", "sentences": [{ "ja": "目が大きいです。", "zh": "眼睛很大。" }, { "ja": "目が疲れました。", "zh": "眼睛累了。" }] },
    { "id": "L16-W23", "category": "Nouns", "kanji": "耳", "kana": "みみ", "romaji": "mimi", "meaning": "耳朵", "sentences": [{ "ja": "耳がよく聞こえません。", "zh": "耳朵听不太清楚。" }, { "ja": "音楽を耳で聞きます。", "zh": "用耳朵听音乐。" }] },
    { "id": "L16-W24", "category": "Nouns", "kanji": "口", "kana": "くち", "romaji": "kuchi", "meaning": "嘴", "sentences": [{ "ja": "口を開けてください。", "zh": "请张开嘴。" }, { "ja": "口を閉じてください。", "zh": "请闭上嘴。" }] },
    { "id": "L16-W25", "category": "Nouns", "kanji": "歯", "kana": "は", "romaji": "ha", "meaning": "牙齿", "sentences": [{ "ja": "毎日歯を磨きます。", "zh": "每天刷牙。" }, { "ja": "歯が痛いです。", "zh": "牙疼。" }] },
    { "id": "L16-W26", "category": "Nouns", "kanji": "お腹", "kana": "おなか", "romaji": "onaka", "meaning": "肚子", "sentences": [{ "ja": "お腹がすきました。", "zh": "肚子饿了。" }, { "ja": "お腹がいっぱいです。", "zh": "肚子饱了。" }] },
    { "id": "L16-W27", "category": "Nouns", "kanji": "足", "kana": "あし", "romaji": "ashi", "meaning": "脚，腿", "sentences": [{ "ja": "足が速いです。", "zh": "跑得快。" }, { "ja": "サッカーで足をけがしました。", "zh": "踢足球时伤了脚。" }] },
    { "id": "L16-W28", "category": "Nouns", "kanji": "緑", "kana": "みどり", "romaji": "midori", "meaning": "绿色，绿植", "sentences": [{ "ja": "公園は緑が多いです。", "zh": "公园里绿植很多。" }, { "ja": "緑のシャツを着ています。", "zh": "穿着绿色的衬衫。" }] },
    { "id": "L16-W29", "category": "Nouns", "kanji": "お寺", "kana": "おてら", "romaji": "otera", "meaning": "寺庙", "sentences": [{ "ja": "京都でお寺を見ました。", "zh": "在京都看了寺庙。" }, { "ja": "このお寺は有名です。", "zh": "这座寺庙很有名。" }] },
    { "id": "L16-W30", "category": "Nouns", "kanji": "神社", "kana": "じんじゃ", "romaji": "jinja", "meaning": "神社", "sentences": [{ "ja": "正月に神社へ行きます。", "zh": "新年去神社。" }, { "ja": "神社の前で写真を撮りました。", "zh": "在神社前拍了照。" }] },
    { "id": "L16-W31", "category": "Expressions", "kanji": "どうやって", "kana": "どうやって", "romaji": "douyatte", "meaning": "怎样，如何", "sentences": [{ "ja": "ここまでどうやって来ましたか。", "zh": "你是怎么来这里的？" }, { "ja": "この料理はどうやって作りますか。", "zh": "这道菜怎么做？" }] },
    { "id": "L16-W32", "category": "Nouns", "kanji": "キャッシュカード", "kana": "キャッシュカード", "romaji": "kyasshuka-do", "meaning": "银行卡", "sentences": [{ "ja": "キャッシュカードをなくしました。", "zh": "我丢了银行卡。" }, { "ja": "キャッシュカードで支払います。", "zh": "我用银行卡支付。" }] }
  ],
  17: [
    { "id": "L17-W1", "category": "Verbs", "grammarType": "Group II", "kanji": "覚えます", "kana": "おぼえます", "romaji": "oboemasu", "meaning": "记住", "conjugations": { "masu": "覚えます", "dictionary": "おぼえる", "te": "おぼえて", "nai": "おぼえない", "ta": "おぼえた" }, "sentences": [{ "ja": "新しい言葉を覚えます。", "zh": "记住新单词。" }, { "ja": "電話番号を覚えてください。", "zh": "请记住电话号码。" }] },
    { "id": "L17-W2", "category": "Verbs", "grammarType": "Group II", "kanji": "忘れます", "kana": "わすれます", "romaji": "wasuremasu", "meaning": "忘记", "conjugations": { "masu": "忘れます", "dictionary": "わすれる", "te": "わすれて", "nai": "わすれない", "ta": "わすれた" }, "sentences": [{ "ja": "宿題を忘れました。", "zh": "忘了作业。" }, { "ja": "傘を忘れないでください。", "zh": "请不要忘记带伞。" }] },
    { "id": "L17-W3", "category": "Verbs", "grammarType": "Group I", "kanji": "なくします", "kana": "なくします", "romaji": "nakushimasu", "meaning": "丢失", "conjugations": { "masu": "なくします", "dictionary": "なくす", "te": "なくして", "nai": "なくさない", "ta": "なくした" }, "sentences": [{ "ja": "鍵をなくしました。", "zh": "把钥匙弄丢了。" }, { "ja": "財布をなくさないように、気をつけます。", "zh": "注意不要把钱包弄丢。" }] },
    { "id": "L17-W4", "category": "Verbs", "grammarType": "Group I", "kanji": "払います", "kana": "はらいます", "romaji": "haraimasu", "meaning": "支付", "conjugations": { "masu": "払います", "dictionary": "はらう", "te": "はらって", "nai": "はらわない", "ta": "はらった" }, "sentences": [{ "ja": "カードでお金を払います。", "zh": "用卡付钱。" }, { "ja": "電気代を払わなければなりません。", "zh": "必须支付电费。" }] },
    { "id": "L17-W5", "category": "Verbs", "grammarType": "Group I", "kanji": "返します", "kana": "かえします", "romaji": "kaeshimasu", "meaning": "归还", "conjugations": { "masu": "返します", "dictionary": "かえす", "te": "かえして", "nai": "かえさない", "ta": "かえした" }, "sentences": [{ "ja": "図書館に本を返します。", "zh": "把书还给图书馆。" }, { "ja": "借りたお金はすぐに返してください。", "zh": "请立即归还借的钱。" }] },
    { "id": "L17-W6", "category": "Verbs", "grammarType": "Group II", "kanji": "出かけます", "kana": "でかけます", "romaji": "dekakemasu", "meaning": "出门，外出", "conjugations": { "masu": "出かけます", "dictionary": "でかける", "te": "でかけて", "nai": "でかけない", "ta": "でかけた" }, "sentences": [{ "ja": "日曜日に友達と出かけます。", "zh": "星期天和朋友出去。" }, { "ja": "これからちょっと出かけます。", "zh": "现在要出去一下。" }] },
    { "id": "L17-W7", "category": "Verbs", "grammarType": "Group I", "kanji": "脱ぎます", "kana": "ぬぎます", "romaji": "nugimasu", "meaning": "脱（衣服、鞋）", "conjugations": { "masu": "脱ぎます", "dictionary": "ぬぐ", "te": "ぬいで", "nai": "ぬがない", "ta": "ぬいだ" }, "sentences": [{ "ja": "家に入るとき、靴を脱ぎます。", "zh": "进屋时要脱鞋。" }, { "ja": "コートを脱いでください。", "zh": "请脱下外套。" }] },
    { "id": "L17-W8", "category": "Verbs", "grammarType": "Group I", "kanji": "持って行きます", "kana": "もっていきます", "romaji": "motteikimasu", "meaning": "带去", "conjugations": { "masu": "持って行きます", "dictionary": "もっていく", "te": "もっていって", "nai": "もっていかない", "ta": "もっていった" }, "sentences": [{ "ja": "パーティーにワインを持って行きます。", "zh": "带葡萄酒去派对。" }, { "ja": "ごみを外に持って行ってください。", "zh": "请把垃圾带到外面去。" }] },
    { "id": "L17-W9", "category": "Verbs", "grammarType": "Irregular", "kanji": "持って来ます", "kana": "もってきます", "romaji": "mottekimasu", "meaning": "带来", "conjugations": { "masu": "持って来ます", "dictionary": "もってくる", "te": "もってきて", "nai": "もってこない", "ta": "もってきた" }, "sentences": [{ "ja": "明日の会議に資料を持って来てください。", "zh": "请带资料来参加明天的会议。" }, { "ja": "宿題を持って来ましたか。", "zh": "作业带来了吗？" }] },
    { "id": "L17-W10", "category": "Verbs", "grammarType": "Irregular", "kanji": "心配します", "kana": "しんぱいします", "romaji": "shinpaishimasu", "meaning": "担心", "conjugations": { "masu": "心配します", "dictionary": "しんぱいする", "te": "しんぱいして", "nai": "しんぱいしない", "ta": "しんぱいした" }, "sentences": [{ "ja": "家族のことを心配しています。", "zh": "在担心家人的事。" }, { "ja": "心配しないでください。大丈夫です。", "zh": "请不要担心。没事的。" }] },
    { "id": "L17-W11", "category": "Verbs", "grammarType": "Irregular", "kanji": "残業します", "kana": "ざんぎょうします", "romaji": "zangyoushimasu", "meaning": "加班", "conjugations": { "masu": "残業します", "dictionary": "ざんぎょうする", "te": "ざんぎょうして", "nai": "ざんぎょうしない", "ta": "ざんぎょうした" }, "sentences": [{ "ja": "毎晩遅くまで残業します。", "zh": "每晚加班到很晚。" }, { "ja": "今日は残業しなければなりません。", "zh": "今天必须加班。" }] },
    { "id": "L17-W12", "category": "Verbs", "grammarType": "Irregular", "kanji": "出張します", "kana": "しゅっちょうします", "romaji": "shucchoushimasu", "meaning": "出差", "conjugations": { "masu": "出張します", "dictionary": "しゅっちょうする", "te": "しゅっちょうして", "nai": "しゅっちょうしない", "ta": "しゅっちょうした" }, "sentences": [{ "ja": "来週大阪へ出張します。", "zh": "下周去大阪出差。" }, { "ja": "アメリカへ出張したことがあります。", "zh": "去美国出差过。" }] },
    { "id": "L17-W13", "category": "Adjectives", "grammarType": "na-adj", "kanji": "大切な", "kana": "たいせつな", "romaji": "taisetsuna", "meaning": "重要，珍贵", "sentences": [{ "ja": "これは大切な写真です。", "zh": "这是珍贵的照片。" }, { "ja": "家族はとても大切です。", "zh": "家人非常重要。" }] },
    { "id": "L17-W14", "category": "Adjectives", "grammarType": "na-adj", "kanji": "大丈夫な", "kana": "だいじょうぶな", "romaji": "daijoubuna", "meaning": "没关系，放心", "sentences": [{ "ja": "一人で大丈夫ですか。", "zh": "一个人没关系吗？" }, { "ja": "大丈夫です。問題ありません。", "zh": "没关系，没有问题。" }] },
    { "id": "L17-W15", "category": "Adjectives", "grammarType": "i-adj", "kanji": "危ない", "kana": "あぶない", "romaji": "abunai", "meaning": "危险", "sentences": [{ "ja": "この川は危ないですから、泳がないでください。", "zh": "这条河很危险，请不要游泳。" }, { "ja": "夜、一人で歩くのは危ないです。", "zh": "晚上一个人走路很危险。" }] },
    { "id": "L17-W16", "category": "Nouns", "kanji": "問題", "kana": "もんだい", "romaji": "mondai", "meaning": "问题", "sentences": [{ "ja": "何か問題がありますか。", "zh": "有什么问题吗？" }, { "ja": "この問題は難しいです。", "zh": "这个问题很难。" }] },
    { "id": "L17-W17", "category": "Nouns", "kanji": "答え", "kana": "こたえ", "romaji": "kotae", "meaning": "回答", "sentences": [{ "ja": "答えがわかりません。", "zh": "不知道答案。" }, { "ja": "答えを教えてください。", "zh": "请告诉我答案。" }] },
    { "id": "L17-W18", "category": "Nouns", "kanji": "禁煙", "kana": "きんえん", "romaji": "kinen", "meaning": "禁烟", "sentences": [{ "ja": "ここは禁煙です。", "zh": "这里禁止吸烟。" }, { "ja": "禁煙の席をお願いします。", "zh": "请给我禁烟的座位。" }] },
    { "id": "L17-W19", "category": "Nouns", "kanji": "健康保険証", "kana": "けんこうほけんしょう", "romaji": "kenkouhokenshou", "meaning": "健康保险证", "sentences": [{ "ja": "病院へ行くとき、健康保険証を持って行きます。", "zh": "去医院时，带上健康保险证。" }, { "ja": "健康保険証を見せてください。", "zh": "请出示您的健康保险证。" }] },
    { "id": "L17-W20", "category": "Nouns", "kanji": "かぜ", "kana": "かぜ", "romaji": "kaze", "meaning": "感冒", "sentences": [{ "ja": "かぜをひきました。", "zh": "感冒了。" }, { "ja": "かぜ薬を飲みました。", "zh": "吃了感冒药。" }] },
    { "id": "L17-W21", "category": "Nouns", "kanji": "熱", "kana": "ねつ", "romaji": "netsu", "meaning": "发烧", "sentences": [{ "ja": "熱があります。", "zh": "发烧了。" }, { "ja": "熱が高いです。", "zh": "烧得很高。" }] },
    { "id": "L17-W22", "category": "Nouns", "kanji": "病気", "kana": "びょうき", "romaji": "byouki", "meaning": "疾病", "sentences": [{ "ja": "病気になりました。", "zh": "生病了。" }, { "ja": "病気の時は、薬を飲みます。", "zh": "生病时要吃药。" }] },
    { "id": "L17-W23", "category": "Nouns", "kanji": "薬", "kana": "くすり", "romaji": "kusuri", "meaning": "药", "sentences": [{ "ja": "薬を飲まなければなりません。", "zh": "必须吃药。" }, { "ja": "これは頭の薬です。", "zh": "这是头痛药。" }] },
    { "id": "L17-W24", "category": "Nouns", "kanji": "お風呂", "kana": "おふろ", "romaji": "ofuro", "meaning": "澡堂，浴池", "sentences": [{ "ja": "お風呂に入ります。", "zh": "洗澡。" }, { "ja": "お風呂が好きです。", "zh": "喜欢泡澡。" }] },
    { "id": "L17-W25", "category": "Nouns", "kanji": "上着", "kana": "うわぎ", "romaji": "uwagi", "meaning": "上衣，外套", "sentences": [{ "ja": "寒いので、上着を着ます。", "zh": "因为冷，所以穿上外套。" }, { "ja": "上着を脱いでもいいですか。", "zh": "可以脱下外套吗？" }] },
    { "id": "L17-W26", "category": "Nouns", "kanji": "下着", "kana": "したぎ", "romaji": "shitagi", "meaning": "内衣", "sentences": [{ "ja": "新しい下着を買いました。", "zh": "买了新内衣。" }, { "ja": "旅行の前に下着を準備します。", "zh": "旅行前准备内衣。" }] },
    { "id": "L17-W27", "category": "Expressions", "kanji": "お大事に", "kana": "おだいじに", "romaji": "odaijini", "meaning": "请多保重", "sentences": [{ "ja": "先生、ありがとうございました。お大事に。", "zh": "医生，谢谢您。请多保重。" }, { "ja": "A: かぜです。 B: そうですか。お大事に。", "zh": "A：我感冒了。 B：是吗？请多保重。" }] }
  ],
  18: [
    { "id": "L18-W1", "category": "Verbs", "grammarType": "Group II", "kanji": "できます", "kana": "できます", "romaji": "dekimasu", "meaning": "会，能够，可以", "conjugations": { "masu": "できます", "dictionary": "できる", "te": "できて", "nai": "できない", "ta": "できた" }, "sentences": [{ "ja": "スキーができます。", "zh": "会滑雪。" }, { "ja": "ここでカードが使えますか。ええ、できますよ。", "zh": "这里可以用卡吗？嗯，可以的。" }] },
    { "id": "L18-W2", "category": "Verbs", "grammarType": "Group I", "kanji": "洗います", "kana": "あらいます", "romaji": "araimasu", "meaning": "洗", "conjugations": { "masu": "洗います", "dictionary": "洗う", "te": "洗って", "nai": "洗わない", "ta": "洗った" }, "sentences": [{ "ja": "手を洗います。", "zh": "洗手。" }] },
    { "id": "L18-W3", "category": "Verbs", "grammarType": "Group I", "kanji": "弾きます", "kana": "ひきます", "romaji": "hikimasu", "meaning": "弹（钢琴、吉他等弦乐器）", "conjugations": { "masu": "弾きます", "dictionary": "弾く", "te": "弾いて", "nai": "弾かない", "ta": "弾いた" }, "sentences": [{ "ja": "ピアノを弾くことができます。", "zh": "会弹钢琴。" }] },
    { "id": "L18-W4", "category": "Verbs", "grammarType": "Group I", "kanji": "歌います", "kana": "うたいます", "romaji": "utaimasu", "meaning": "唱歌", "conjugations": { "masu": "歌います", "dictionary": "歌う", "te": "歌って", "nai": "歌わない", "ta": "歌った" }, "sentences": [{ "ja": "歌を歌います。", "zh": "唱歌。" }] },
    { "id": "L18-W5", "category": "Verbs", "grammarType": "Group II", "kanji": "集めます", "kana": "あつめます", "romaji": "atsumemasu", "meaning": "收集，搜集", "conjugations": { "masu": "集めます", "dictionary": "集める", "te": "集めて", "nai": "集めない", "ta": "集めた" }, "sentences": [{ "ja": "切手を集めています。", "zh": "正在收集邮票。" }] },
    { "id": "L18-W6", "category": "Verbs", "grammarType": "Group II", "kanji": "捨てます", "kana": "すてます", "romaji": "sutemasu", "meaning": "扔，舍弃", "conjugations": { "masu": "捨てます", "dictionary": "捨てる", "te": "捨てて", "nai": "捨てない", "ta": "捨てた" }, "sentences": [{ "ja": "ここにゴミを捨てないでください。", "zh": "请不要在这里扔垃圾。" }] },
    { "id": "L18-W7", "category": "Verbs", "grammarType": "Group II", "kanji": "換えます", "kana": "かえます", "romaji": "kaemasu", "meaning": "换，交换", "conjugations": { "masu": "換えます", "dictionary": "換える", "te": "換えて", "nai": "換えない", "ta": "換えた" }, "sentences": [{ "ja": "お金を換えます。", "zh": "换钱。" }] },
    { "id": "L18-W8", "category": "Verbs", "grammarType": "Irregular", "kanji": "運転します", "kana": "うんてんします", "romaji": "untenshimasu", "meaning": "驾驶，开车", "conjugations": { "masu": "運転します", "dictionary": "運転する", "te": "運転して", "nai": "運転しない", "ta": "運転した" }, "sentences": [{ "ja": "車を運転することができますか。", "zh": "你会开车吗？" }] },
    { "id": "L18-W9", "category": "Verbs", "grammarType": "Irregular", "kanji": "予約します", "kana": "よやくします", "romaji": "yoyakushimasu", "meaning": "预约，预订", "conjugations": { "masu": "予約します", "dictionary": "予約する", "te": "予約して", "nai": "予約しない", "ta": "予約した" }, "sentences": [{ "ja": "ホテルを予約します。", "zh": "预订酒店。" }] },
    { "id": "L18-W10", "category": "Verbs", "grammarType": "Irregular", "kanji": "見学します", "kana": "けんがくします", "romaji": "kengakushimasu", "meaning": "参观学习", "conjugations": { "masu": "見学します", "dictionary": "見学する", "te": "見学して", "nai": "見学しない", "ta": "見学した" }, "sentences": [{ "ja": "工場を見学します。", "zh": "参观工厂。" }] },
    { "id": "L18-W11", "category": "Nouns", "kanji": "ピアノ", "kana": "ピアノ", "romaji": "piano", "meaning": "钢琴", "sentences": [{ "ja": "ピアノを弾きます。", "zh": "弹钢琴。" }] },
    { "id": "L18-W12", "category": "Nouns", "kanji": "メートル", "kana": "メートル", "romaji": "meetoru", "meaning": "米", "sentences": [{ "ja": "50メートル泳ぐことができます。", "zh": "能游50米。" }] },
    { "id": "L18-W13", "category": "Nouns", "kanji": "現金", "kana": "げんきん", "romaji": "genkin", "meaning": "现金", "sentences": [{ "ja": "現金で払います。", "zh": "用现金支付。" }] },
    { "id": "L18-W14", "category": "Nouns", "kanji": "趣味", "kana": "しゅみ", "romaji": "shumi", "meaning": "爱好", "sentences": [{ "ja": "趣味は何ですか。", "zh": "你的爱好是什么？" }, { "ja": "私の趣味は写真を撮ることです。", "zh": "我的爱好是拍照片。" }] },
    { "id": "L18-W15", "category": "Nouns", "kanji": "日記", "kana": "にっき", "romaji": "nikki", "meaning": "日记", "sentences": [{ "ja": "毎日日記を書いています。", "zh": "每天都在写日记。" }] },
    { "id": "L18-W16", "category": "Nouns", "kanji": "お祈り", "kana": "おいのり", "romaji": "oinori", "meaning": "祈祷", "sentences": [{ "ja": "お祈りをします。", "zh": "祈祷。" }] },
    { "id": "L18-W17", "category": "Nouns", "kanji": "課長", "kana": "かちょう", "romaji": "kachou", "meaning": "课长", "sentences": [{ "ja": "課長に相談します。", "zh": "向课长咨询。" }] },
    { "id": "L18-W18", "category": "Nouns", "kanji": "部長", "kana": "ぶちょう", "romaji": "buchou", "meaning": "部长", "sentences": [{ "ja": "部長は会議室にいます。", "zh": "部长在会议室。" }] },
    { "id": "L18-W19", "category": "Nouns", "kanji": "社長", "kana": "しゃちょう", "romaji": "shachou", "meaning": "社长，总经理", "sentences": [{ "ja": "社長に会います。", "zh": "见社长。" }] },
    { "id": "L18-W20", "category": "Nouns", "kanji": "動物", "kana": "どうぶつ", "romaji": "doubutsu", "meaning": "动物", "sentences": [{ "ja": "動物が好きですか。", "zh": "喜欢动物吗？" }] },
    { "id": "L18-W21", "category": "Nouns", "kanji": "馬", "kana": "うま", "romaji": "uma", "meaning": "马", "sentences": [{ "ja": "馬に乗ったことがありますか。", "zh": "你骑过马吗？" }] },
    { "id": "L18-W22", "category": "Expressions", "kanji": "なかなか", "kana": "なかなか", "romaji": "nakanaka", "meaning": "（接否定）不容易，怎么也...", "sentences": [{ "ja": "日本でなかなか馬を見ることができません。", "zh": "在日本不容易看到马。" }] },
    { "id": "L18-W23", "category": "Expressions", "kanji": "ぜひ", "kana": "ぜひ", "romaji": "zehi", "meaning": "务必，一定", "sentences": [{ "ja": "ぜひ遊びに来てください。", "zh": "请务必来玩。" }] }
  ],
  19: [
    { "id": "L19-W1", "category": "Verbs", "grammarType": "Group I", "kanji": "登ります", "kana": "のぼります", "romaji": "noborimasu", "meaning": "登，爬", "conjugations": { "masu": "登ります", "dictionary": "のぼる", "te": "のぼって", "nai": "のぼらない", "ta": "のぼった" }, "sentences": [{ "ja": "山に登ります。", "zh": "爬山。" }, { "ja": "富士山に登ったことがあります。", "zh": "爬过富士山。" }] },
    { "id": "L19-W2", "category": "Verbs", "grammarType": "Group I", "kanji": "泊まります", "kana": "とまります", "romaji": "tomarimasu", "meaning": "住（宿）", "conjugations": { "masu": "泊まります", "dictionary": "とまる", "te": "とまって", "nai": "とまらない", "ta": "とまった" }, "sentences": [{ "ja": "ホテルに泊まります。", "zh": "住酒店。" }, { "ja": "京都の旅館に泊まりたいです。", "zh": "想住京都的日式旅馆。" }] },
    { "id": "L19-W3", "category": "Verbs", "grammarType": "Irregular", "kanji": "掃除します", "kana": "そうじします", "romaji": "soujishimasu", "meaning": "打扫", "conjugations": { "masu": "掃除します", "dictionary": "そうじする", "te": "そうじして", "nai": "そうじしない", "ta": "そうじした" }, "sentences": [{ "ja": "部屋を掃除します。", "zh": "打扫房间。" }, { "ja": "週末に家を掃除しなければなりません。", "zh": "周末必须打扫家里。" }] },
    { "id": "L19-W4", "category": "Verbs", "grammarType": "Irregular", "kanji": "洗濯します", "kana": "せんたくします", "romaji": "sentakushimasu", "meaning": "洗衣服", "conjugations": { "masu": "洗濯します", "dictionary": "せんたくする", "te": "せんたくして", "nai": "せんたくしない", "ta": "せんたくした" }, "sentences": [{ "ja": "毎日洗濯します。", "zh": "每天洗衣服。" }, { "ja": "洗濯機で服を洗濯します。", "zh": "用洗衣机洗衣服。" }] },
    { "id": "L19-W5", "category": "Verbs", "grammarType": "Group I", "kanji": "なります", "kana": "なります", "romaji": "narimasu", "meaning": "成为", "conjugations": { "masu": "なります", "dictionary": "なる", "te": "なって", "nai": "ならない", "ta": "なった" }, "sentences": [{ "ja": "将来、医者になりたいです。", "zh": "将来想成为医生。" }, { "ja": "だんだん寒くなりました。", "zh": "天气渐渐变冷了。" }] },
    { "id": "L19-W6", "category": "Adjectives", "grammarType": "i-adj", "kanji": "眠い", "kana": "ねむい", "romaji": "nemui", "meaning": "困", "sentences": [{ "ja": "昨日の夜、あまり寝ませんでしたから、眠いです。", "zh": "因为昨晚没怎么睡，所以很困。" }, { "ja": "眠い時、コーヒーを飲みます。", "zh": "困的时候喝咖啡。" }] },
    { "id": "L19-W7", "category": "Adjectives", "grammarType": "i-adj", "kanji": "強い", "kana": "つよい", "romaji": "tsuyoi", "meaning": "强", "sentences": [{ "ja": "彼は体が強いです。", "zh": "他身体很强壮。" }, { "ja": "風が強いです。", "zh": "风很大。" }] },
    { "id": "L19-W8", "category": "Adjectives", "grammarType": "i-adj", "kanji": "弱い", "kana": "よわい", "romaji": "yowai", "meaning": "弱", "sentences": [{ "ja": "私はお酒に弱いです。", "zh": "我酒量不好。" }, { "ja": "このチームは弱いです。", "zh": "这个队很弱。" }] },
    { "id": "L19-W9", "category": "Nouns", "kanji": "練習", "kana": "れんしゅう", "romaji": "renshuu", "meaning": "练习", "sentences": [{ "ja": "ピアノの練習をします。", "zh": "练习钢琴。" }, { "ja": "毎日日本語を練習しています。", "zh": "每天都在练习日语。" }] },
    { "id": "L19-W10", "category": "Nouns", "kanji": "ゴルフ", "kana": "ゴルフ", "romaji": "gorufu", "meaning": "高尔夫球", "sentences": [{ "ja": "ゴルフをしたことがありますか。", "zh": "打过高尔夫球吗？" }, { "ja": "休みの日にゴルフをします。", "zh": "休息日打高尔夫。" }] },
    { "id": "L19-W11", "category": "Nouns", "kanji": "相撲", "kana": "すもう", "romaji": "sumou", "meaning": "相扑", "sentences": [{ "ja": "相撲を見たことがあります。", "zh": "看过相扑。" }, { "ja": "相撲は日本の国技です。", "zh": "相扑是日本的国技。" }] },
    { "id": "L19-W12", "category": "Nouns", "kanji": "お茶", "kana": "おちゃ", "romaji": "ocha", "meaning": "茶（道）", "sentences": [{ "ja": "お茶を習いたいです。", "zh": "想学茶道。" }, { "ja": "京都でお茶を飲みました。", "zh": "在京都喝了茶。" }] },
    { "id": "L19-W13", "category": "Nouns", "kanji": "日", "kana": "ひ", "romaji": "hi", "meaning": "日子", "sentences": [{ "ja": "母の日は５月の第２日曜日です。", "zh": "母亲节是五月的第二个星期日。" }, { "ja": "今日は天気がいい日です。", "zh": "今天是个好天气。" }] },
    { "id": "L19-W14", "category": "Nouns", "kanji": "調子", "kana": "ちょうし", "romaji": "choushi", "meaning": "状况", "sentences": [{ "ja": "体の調子がいいです。", "zh": "身体状况很好。" }, { "ja": "このパソコンは調子が悪いです。", "zh": "这台电脑状况不好。" }] },
    { "id": "L19-W15", "category": "Nouns", "kanji": "一度", "kana": "いちど", "romaji": "ichido", "meaning": "一次", "sentences": [{ "ja": "一度、日本へ行ったことがあります。", "zh": "去过一次日本。" }, { "ja": "もう一度お願いします。", "zh": "请再说一次。" }] },
    { "id": "L19-W16", "category": "Nouns", "kanji": "一度も", "kana": "いちども", "romaji": "ichidomo", "meaning": "一次也（不）", "sentences": [{ "ja": "一度も外国へ行ったことがありません。", "zh": "一次也没去过国外。" }, { "ja": "彼は一度も嘘をついたことがありません。", "zh": "他一次也没说过谎。" }] },
    { "id": "L19-W17", "category": "Expressions", "kanji": "だんだん", "kana": "だんだん", "romaji": "dandan", "meaning": "渐渐地", "sentences": [{ "ja": "だんだん日本語が上手になりました。", "zh": "日语渐渐变好了。" }, { "ja": "外はだんだん暗くなりました。", "zh": "外面渐渐变暗了。" }] },
    { "id": "L19-W18", "category": "Expressions", "kanji": "もうすぐ", "kana": "もうすぐ", "romaji": "mousugu", "meaning": "马上", "sentences": [{ "ja": "もうすぐ春が来ます。", "zh": "春天马上就要来了。" }, { "ja": "バスはもうすぐ来ますよ。", "zh": "巴士马上就来了哦。" }] },
    { "id": "L19-W19", "category": "Expressions", "kanji": "おかげさまで", "kana": "おかげさまで", "romaji": "okagesamade", "meaning": "托您的福", "sentences": [{ "ja": "A: お元気ですか。 B: はい、おかげさまで元気です。", "zh": "A：您好吗？ B：是的，托您的福，我很好。" }, { "ja": "おかげさまで、試験に合格しました。", "zh": "托您的福，我考试合格了。" }] },
    { "id": "L19-W20", "category": "Expressions", "kanji": "乾杯", "kana": "かんぱい", "romaji": "kanpai", "meaning": "干杯", "sentences": [{ "ja": "皆さん、乾杯！", "zh": "各位，干杯！" }, { "ja": "ビールで乾杯しましょう。", "zh": "我们用啤酒干杯吧。" }] },
    { "id": "L19-W21", "category": "Expressions", "kanji": "実は", "kana": "じつは", "romaji": "jitsuwa", "meaning": "其实", "sentences": [{ "ja": "実は、私は日本の歌が好きです。", "zh": "其实，我喜欢日本的歌曲。" }, { "ja": "実は、明日国へ帰ります。", "zh": "其实，我明天回国。" }] },
    { "id": "L19-W22", "category": "Nouns", "kanji": "ダイエット", "kana": "ダイエット", "romaji": "daietto", "meaning": "减肥", "sentences": [{ "ja": "ダイエットをしています。", "zh": "正在减肥。" }, { "ja": "ダイエットは明日から始めます。", "zh": "减肥从明天开始。" }] },
    { "id": "L19-W23", "category": "Expressions", "kanji": "何回も", "kana": "なんかいも", "romaji": "nankaimo", "meaning": "好几次", "sentences": [{ "ja": "この映画は何回も見ました。", "zh": "这部电影看了好几次。" }, { "ja": "何回も練習しました。", "zh": "练习了好几次。" }] },
    { "id": "L19-W24", "category": "Expressions", "kanji": "しかし", "kana": "しかし", "romaji": "shikashi", "meaning": "但是", "sentences": [{ "ja": "毎日運動しています。しかし、なかなか痩せません。", "zh": "每天都在运动。但是，怎么也瘦不下来。" }, { "ja": "このレストランは高いです。しかし、とてもおいしいです。", "zh": "这家餐厅很贵。但是，非常好吃。" }] },
    { "id": "L19-W25", "category": "Adjectives", "grammarType": "na-adj", "kanji": "無理な", "kana": "むりな", "romaji": "murina", "meaning": "勉强，过分", "sentences": [{ "ja": "無理なダイエットは体に悪いです。", "zh": "过度的减肥对身体不好。" }, { "ja": "無理をしないでください。", "zh": "请不要勉强。" }] },
    { "id": "L19-W26", "category": "Expressions", "kanji": "体にいい", "kana": "からだにいい", "romaji": "karadaniii", "meaning": "对身体好", "sentences": [{ "ja": "野菜は体にいいです。", "zh": "蔬菜对身体好。" }, { "ja": "早寝早起きは体にいいです。", "zh": "早睡早起对身体好。" }] }
  ],
  20: [
    { "id": "L20-W1", "category": "Verbs", "grammarType": "Group I", "kanji": "要ります", "kana": "いります", "romaji": "irimasu", "meaning": "需要，必要", "conjugations": { "masu": "要ります", "dictionary": "要る", "te": "要って", "nai": "要らない", "ta": "要った" }, "sentences": [{ "ja": "ビザが要りますか。", "zh": "需要签证吗？" }] },
    { "id": "L20-W2", "category": "Verbs", "grammarType": "Group II", "kanji": "調べます", "kana": "しらべます", "romaji": "shirabemasu", "meaning": "调查，检查，查找", "conjugations": { "masu": "調べます", "dictionary": "調べる", "te": "調べて", "nai": "調べない", "ta": "調べた" }, "sentences": [{ "ja": "辞書で言葉を調べます。", "zh": "用辞典查单词。" }] },
    { "id": "L20-W3", "category": "Verbs", "grammarType": "Group I", "kanji": "直します", "kana": "なおします", "romaji": "naoshimasu", "meaning": "修理，修改，改正", "conjugations": { "masu": "直します", "dictionary": "直す", "te": "直して", "nai": "直さない", "ta": "直した" }, "sentences": [{ "ja": "間違いを直してください。", "zh": "请修改错误。" }] },
    { "id": "L20-W4", "category": "Verbs", "grammarType": "Irregular", "kanji": "修理します", "kana": "しゅうりします", "romaji": "shuurishimasu", "meaning": "修理", "conjugations": { "masu": "修理します", "dictionary": "修理する", "te": "修理して", "nai": "修理しない", "ta": "修理した" }, "sentences": [{ "ja": "時計を修理します。", "zh": "修理钟表。" }] },
    { "id": "L20-W5", "category": "Verbs", "grammarType": "Irregular", "kanji": "電話します", "kana": "でんわします", "romaji": "denwashimasu", "meaning": "打电话", "conjugations": { "masu": "電話します", "dictionary": "電話する", "te": "電話して", "nai": "電話しない", "ta": "電話した" }, "sentences": [{ "ja": "晩にご飯を食べてから、電話します。", "zh": "晚上吃过饭后打电话。" }] },
    { "id": "L20-W6", "category": "Nouns", "kanji": "僕", "kana": "ぼく", "romaji": "boku", "meaning": "我（男性常用自称，普通体）", "sentences": [{ "ja": "僕は明日暇だよ。", "zh": "我明天有空哦。" }] },
    { "id": "L20-W7", "category": "Nouns", "kanji": "君", "kana": "きみ", "romaji": "kimi", "meaning": "你（用于对下级或对等关系，普通体）", "sentences": [{ "ja": "君の靴はこれ？", "zh": "你的鞋是这双吗？" }] },
    { "id": "L20-W8", "category": "Nouns", "kanji": "～君", "kana": "～くん", "romaji": "～kun", "meaning": "～君（用于称呼男孩、男下级等）", "sentences": [{ "ja": "佐藤君はどこ？", "zh": "佐藤君在哪？" }] },
    { "id": "L20-W9", "category": "Nouns", "kanji": "うん", "kana": "うん", "romaji": "un", "meaning": "嗯（“是”的普通体）", "sentences": [{ "ja": "「明日来る？」「うん、行く。」", "zh": "“明天来吗？”“嗯，去。”" }] },
    { "id": "L20-W10", "category": "Nouns", "kanji": "ううん", "kana": "ううん", "romaji": "uun", "meaning": "不（“不是”的普通体）", "sentences": [{ "ja": "「ビール飲む？」「ううん、飲まない。」", "zh": "“喝啤酒吗？”“不，不喝。”" }] },
    { "id": "L20-W11", "category": "Nouns", "kanji": "サラリーマン", "kana": "サラリーマン", "romaji": "sarariiman", "meaning": "上班族", "sentences": [{ "ja": "父はサラリーマンです。", "zh": "父亲是上班族。" }] },
    { "id": "L20-W12", "category": "Nouns", "kanji": "ことば", "kana": "ことば", "romaji": "kotoba", "meaning": "单词，语言", "sentences": [{ "ja": "新しい言葉を覚えます。", "zh": "背新单词。" }] },
    { "id": "L20-W13", "category": "Nouns", "kanji": "物", "kana": "もの", "romaji": "mono", "meaning": "东西，物品", "sentences": [{ "ja": "重い物を持たないでください。", "zh": "请不要拿重物。" }] },
    { "id": "L20-W14", "category": "Nouns", "kanji": "料金", "kana": "りょうきん", "romaji": "ryoukin", "meaning": "费用，价钱", "sentences": [{ "ja": "電話料金が高いです。", "zh": "电话费很贵。" }] },
    { "id": "L20-W15", "category": "Nouns", "kanji": "ビザ", "kana": "ビザ", "romaji": "biza", "meaning": "签证", "sentences": [{ "ja": "ビザを降ろします。", "zh": "办下签证。" }] },
    { "id": "L20-W16", "category": "Nouns", "kanji": "初め", "kana": "はじめ", "romaji": "hajime", "meaning": "开始", "sentences": [{ "ja": "映画の初めはつまらなかったです。", "zh": "电影开头很无聊。" }] },
    { "id": "L20-W17", "category": "Nouns", "kanji": "終わり", "kana": "おわり", "romaji": "owari", "meaning": "结束", "sentences": [{ "ja": "授業はもうすぐ終わりです。", "zh": "课马上就结束了。" }] },
    { "id": "L20-W18", "category": "Nouns", "kanji": "こっち", "kana": "こっち", "romaji": "kocchi", "meaning": "这边（“こちら”的普通体）", "sentences": [{ "ja": "こっちへ来て。", "zh": "到这边来。" }] },
    { "id": "L20-W19", "category": "Nouns", "kanji": "そっち", "kana": "そっち", "romaji": "socchi", "meaning": "那边（“そちら”的普通体）", "sentences": [{ "ja": "そっちに何がある？", "zh": "那边有什么？" }] },
    { "id": "L20-W20", "category": "Nouns", "kanji": "あっち", "kana": "あっち", "romaji": "acchi", "meaning": "那边（远方，“あちら”的普通体）", "sentences": [{ "ja": "あっちに佐藤さんがいる。", "zh": "佐藤在那边。" }] },
    { "id": "L20-W21", "category": "Nouns", "kanji": "どっち", "kana": "どっち", "romaji": "docchi", "meaning": "哪个（两者选一，“どちら”的普通体）", "sentences": [{ "ja": "どっちがいい？", "zh": "哪个好？" }] },
    { "id": "L20-W22", "category": "Expressions", "kanji": "～けど", "kana": "～けど", "romaji": "～kedo", "meaning": "但是，虽然（口语中常用的转折）", "sentences": [{ "ja": "おいしいけど、高い。", "zh": "虽好吃，但贵。" }] },
    { "id": "L20-W23", "category": "Nouns", "kanji": "お腹がいっぱいです", "kana": "おなかがいっぱいです", "romaji": "onaka ga ippai desu", "meaning": "吃饱了", "sentences": [{ "ja": "もうお腹がいっぱいだ。", "zh": "已经饱了。" }] },
    { "id": "L20-W24", "category": "Expressions", "kanji": "よかったら", "kana": "よかったら", "romaji": "yokattara", "meaning": "如果方便的话", "sentences": [{ "ja": "よかったら、一緒に来ない？", "zh": "如果你愿意的话，要不要一起去？" }] },
    { "id": "L20-W25", "category": "Expressions", "kanji": "色々", "kana": "いろいろ", "romaji": "iroiro", "meaning": "各种各样", "sentences": [{ "ja": "色々お世話になりました。", "zh": "承蒙各种关照。" }] }
  ],
  21: [

  { "id": "L21-W1", "category": "Verbs", "grammarType": "Group I", "kanji": "思います", "kana": "おもいます", "romaji": "omoimasu", "meaning": "认为，想", "conjugations": { "masu": "思います", "dictionary": "思う", "te": "思って", "nai": "思わない", "ta": "思った" }, "sentences": [{ "ja": "いいと思います。", "zh": "我觉得很好。" }] },

  { "id": "L21-W2", "category": "Verbs", "grammarType": "Group I", "kanji": "言います", "kana": "いいます", "romaji": "iimasu", "meaning": "说", "conjugations": { "masu": "言います", "dictionary": "言う", "te": "言って", "nai": "言わない", "ta": "言った" }, "sentences": [{ "ja": "先生はそう言いました。", "zh": "老师那样说了。" }] },

  { "id": "L21-W3", "category": "Verbs", "grammarType": "Group II", "kanji": "足ります", "kana": "たります", "romaji": "tarimasu", "meaning": "足够", "conjugations": { "masu": "足ります", "dictionary": "足りる", "te": "足りて", "nai": "足りない", "ta": "足りた" }, "sentences": [{ "ja": "お金が足りません。", "zh": "钱不够。" }] },

  { "id": "L21-W4", "category": "Verbs", "grammarType": "Group I", "kanji": "勝ちます", "kana": "かちます", "romaji": "kachimasu", "meaning": "赢", "conjugations": { "masu": "勝ちます", "dictionary": "勝つ", "te": "勝って", "nai": "勝たない", "ta": "勝った" }, "sentences": [{ "ja": "日本が勝ちました。", "zh": "日本赢了。" }] },

  { "id": "L21-W5", "category": "Verbs", "grammarType": "Group II", "kanji": "負けます", "kana": "まけます", "romaji": "makemasu", "meaning": "输", "conjugations": { "masu": "負けます", "dictionary": "負ける", "te": "負けて", "nai": "負けない", "ta": "負けた" }, "sentences": [{ "ja": "試合に負けました。", "zh": "比赛输了。" }] },

  { "id": "L21-W6", "category": "Verbs", "grammarType": "Group I", "kanji": "あります", "kana": "あります", "romaji": "arimasu", "meaning": "举行；发生", "conjugations": { "masu": "あります", "dictionary": "ある", "te": "あって", "nai": "あらない", "ta": "あった" }, "sentences": [{ "ja": "会議があります。", "zh": "有会议。" }] },

  { "id": "L21-W7", "category": "Nouns", "kanji": "意見", "kana": "いけん", "romaji": "iken", "meaning": "意见", "sentences": [{ "ja": "意見があります。", "zh": "有意见。" }] },

  { "id": "L21-W8", "category": "Nouns", "kanji": "話", "kana": "はなし", "romaji": "hanashi", "meaning": "话，谈话", "sentences": [{ "ja": "いい話ですね。", "zh": "是个好故事。" }] },

  { "id": "L21-W9", "category": "Nouns", "kanji": "試合", "kana": "しあい", "romaji": "shiai", "meaning": "比赛", "sentences": [{ "ja": "試合があります。", "zh": "有比赛。" }] },

  { "id": "L21-W10", "category": "Nouns", "kanji": "約束", "kana": "やくそく", "romaji": "yakusoku", "meaning": "约定", "sentences": [{ "ja": "約束があります。", "zh": "有约定。" }] },

  { "id": "L21-W11", "category": "Nouns", "kanji": "お祭り", "kana": "おまつり", "romaji": "omatsuri", "meaning": "节日，祭典", "sentences": [{ "ja": "お祭りがあります。", "zh": "有节日活动。" }] },

  { "id": "L21-W12", "category": "Expressions", "kanji": "たぶん", "kana": "たぶん", "romaji": "tabun", "meaning": "大概", "sentences": [{ "ja": "たぶん来ません。", "zh": "大概不来。" }] },

  { "id": "L21-W13", "category": "Expressions", "kanji": "きっと", "kana": "きっと", "romaji": "kitto", "meaning": "一定", "sentences": [{ "ja": "きっと成功します。", "zh": "一定会成功。" }] },

  { "id": "L21-W14", "category": "Expressions", "kanji": "本当に", "kana": "ほんとうに", "romaji": "hontou ni", "meaning": "真的", "sentences": [{ "ja": "本当にそうですか。", "zh": "真的吗？" }] },

  { "id": "L21-W15", "category": "Expressions", "kanji": "もちろん", "kana": "もちろん", "romaji": "mochiron", "meaning": "当然", "sentences": [{ "ja": "もちろんいいです。", "zh": "当然可以。" }] },

  { "id": "L21-W16", "category": "Verbs", "grammarType": "Group I", "kanji": "役に立ちます", "kana": "やくにたちます", "romaji": "yaku ni tachimasu", "meaning": "有用，起作用", "conjugations": { "masu": "役に立ちます", "dictionary": "役に立つ", "te": "役に立って", "nai": "役に立たない", "ta": "役に立った" }, "sentences": [{ "ja": "この辞書は勉強に役に立ちます。", "zh": "这本词典对学习很有用。" }] },

  { "id": "L21-W17", "category": "Adjectives", "grammarType": "na-adj", "kanji": "無駄な", "kana": "むだな", "romaji": "muda na", "meaning": "浪费的，无用的", "sentences": [{ "ja": "無駄な物を買わないほうがいいです。", "zh": "最好不要买没用的东西。" }] },

  { "id": "L21-W18", "category": "Adjectives", "grammarType": "na-adj", "kanji": "不便な", "kana": "ふべんな", "romaji": "fuben na", "meaning": "不方便的", "sentences": [{ "ja": "この町は交通が不便です。", "zh": "这个城市交通不方便。" }] },

  { "id": "L21-W19", "category": "Adjectives", "grammarType": "i-adj", "kanji": "すごい", "kana": "すごい", "romaji": "sugoi", "meaning": "厉害的，惊人的", "sentences": [{ "ja": "すごい人ですね。", "zh": "真是个厉害的人。" }] },

  { "id": "L21-W20", "category": "Nouns", "kanji": "首相", "kana": "しゅしょう", "romaji": "shushou", "meaning": "首相，总理", "sentences": [{ "ja": "首相は来月中国へ行くと思います。", "zh": "我想首相下个月会去中国。" }] },

  { "id": "L21-W21", "category": "Nouns", "kanji": "大統領", "kana": "だいとうりょう", "romaji": "daitouryou", "meaning": "总统", "sentences": [{ "ja": "大統領がテレビで話しました。", "zh": "总统在电视上讲话了。" }] },

  { "id": "L21-W22", "category": "Nouns", "kanji": "政治", "kana": "せいじ", "romaji": "seiji", "meaning": "政治", "sentences": [{ "ja": "政治についてどう思いますか。", "zh": "你怎么看政治？" }] },

  { "id": "L21-W23", "category": "Nouns", "kanji": "ニュース", "kana": "ニュース", "romaji": "nyuusu", "meaning": "新闻", "sentences": [{ "ja": "ニュースを見て、びっくりしました。", "zh": "看了新闻，很吃惊。" }] },

  { "id": "L21-W24", "category": "Nouns", "kanji": "スピーチ", "kana": "スピーチ", "romaji": "supiichi", "meaning": "演讲", "sentences": [{ "ja": "結婚式でスピーチをしました。", "zh": "在婚礼上致辞了。" }] },

  { "id": "L21-W25", "category": "Nouns", "kanji": "アルバイト", "kana": "アルバイト", "romaji": "arubaito", "meaning": "兼职，打工", "sentences": [{ "ja": "大学生のとき、アルバイトをしました。", "zh": "上大学时打过工。" }] },

  { "id": "L21-W26", "category": "Nouns", "kanji": "交通", "kana": "こうつう", "romaji": "koutsuu", "meaning": "交通", "sentences": [{ "ja": "東京は交通が便利です。", "zh": "东京交通很方便。" }] },

  { "id": "L21-W27", "category": "Nouns", "kanji": "ラッシュ", "kana": "ラッシュ", "romaji": "rasshu", "meaning": "交通高峰", "sentences": [{ "ja": "朝のラッシュは大変です。", "zh": "早高峰很辛苦。" }] },

  { "id": "L21-W28", "category": "Expressions", "kanji": "最近", "kana": "さいきん", "romaji": "saikin", "meaning": "最近", "sentences": [{ "ja": "最近、忙しいです。", "zh": "最近很忙。" }] },

  { "id": "L21-W29", "category": "Expressions", "kanji": "そんなに", "kana": "そんなに", "romaji": "sonna ni", "meaning": "那么（常接否定）", "sentences": [{ "ja": "この本はそんなに難しくないです。", "zh": "这本书没有那么难。" }] },

  { "id": "L21-W30", "category": "Expressions", "kanji": "～について", "kana": "～について", "romaji": "~ ni tsuite", "meaning": "关于……", "sentences": [{ "ja": "日本の教育についてどう思いますか。", "zh": "你怎么看日本的教育？" }] },

  { "id": "L21-W31", "category": "Expressions", "kanji": "しかたがありません", "kana": "しかたがありません", "romaji": "shikata ga arimasen", "meaning": "没有办法", "sentences": [{ "ja": "電車がありませんから、しかたがありません。", "zh": "因为没有电车，也没有办法。" }] }

],
  22: [
    { id: 'L22-W1', category: 'Nouns', kanji: 'ケーキ', kana: 'ケーキ', romaji: 'keeki', meaning: '蛋糕', sentences: [{ ja: 'これはミラーさんが作ったケーキです。', zh: '这是米勒先生做的蛋糕。' }] },
    { id: 'L22-W2', category: 'Nouns', kanji: '万里の長城', kana: 'ばんりのちょうじょう', romaji: 'banri no choujou', meaning: '万里长城', sentences: [{ ja: 'これは万里の長城で撮った写真です。', zh: '这是在万里长城拍的照片。' }] },
    { id: 'L22-W3', category: 'Verbs', grammarType: 'Group II', kanji: '着ます', kana: 'きます', romaji: 'kimasu', meaning: '穿（上衣、外衣）', conjugations: { dictionary: '着る', masu: '着ます', te: '着て', nai: '着ない', ta: '着た' }, sentences: [{ ja: 'あの着物を着ている人はだれですか。', zh: '穿着那件和服的人是谁？' }] },
    { id: 'L22-W4', category: 'Expressions', kanji: 'お探しですか', kana: 'おさがしですか', romaji: 'osagashi desu ka', meaning: '您在找～吗？', sentences: [{ ja: 'どんな部屋をお探しですか。', zh: '您在找什么样的房间？' }] },
    { id: 'L22-W5', category: 'Nouns', kanji: '不動産屋', kana: 'ふどうさんや', romaji: 'fudousan ya', meaning: '房屋中介', sentences: [{ ja: '不動産屋で部屋を探します。', zh: '在房屋中介找房子。' }] },
    { id: 'L22-W6', category: 'Nouns', kanji: '家賃', kana: 'やちん', romaji: 'yachin', meaning: '房租', sentences: [{ ja: '家賃は8万円ぐらいです。', zh: '房租大约8万日元。' }] },
    { id: 'L22-W7', category: 'Expressions', kanji: 'では', kana: 'では', romaji: 'dewa', meaning: '那么', sentences: [{ ja: 'では、こちらはいかがですか。', zh: '那么，这边这个怎么样？' }] },
    { id: 'L22-W8', category: 'Expressions', kanji: 'こちら', kana: 'こちら', romaji: 'kochira', meaning: '这边；这个（礼貌）', sentences: [{ ja: 'こちらはいかがですか。', zh: '这个怎么样？' }] },
    { id: 'L22-W9', category: 'Nouns', kanji: 'ダイニングキッチン', kana: 'ダイニングキッチン', romaji: 'dainingu kicchin', meaning: '带餐厅的厨房', sentences: [{ ja: 'ダイニングキッチンと和室ですね。', zh: '是带餐厅的厨房和日式房间啊。' }] },
    { id: 'L22-W10', category: 'Nouns', kanji: '和室', kana: 'わしつ', romaji: 'washitsu', meaning: '日式房间', sentences: [{ ja: '和室がある部屋がいいです。', zh: '有日式房间的房子比较好。' }] },
    { id: 'L22-W11', category: 'Nouns', kanji: '押し入れ', kana: 'おしいれ', romaji: 'oshiire', meaning: '日式壁橱', sentences: [{ ja: '押し入れに布団を入れます。', zh: '把被褥放进壁橱。' }] },
    { id: 'L22-W12', category: 'Nouns', kanji: '布団', kana: 'ふとん', romaji: 'futon', meaning: '被褥', sentences: [{ ja: '布団を入れる所です。', zh: '是放被褥的地方。' }] },
    { id: 'L22-W13', category: 'Nouns', kanji: '眼鏡', kana: 'めがね', romaji: 'megane', meaning: '眼镜', sentences: [{ ja: '眼鏡をかけている人は木村さんです。', zh: '戴眼镜的人是木村先生。' }] },
    { id: 'L22-W14', category: 'Verbs', grammarType: 'Group II', kanji: 'かけます', kana: 'かけます', romaji: 'kakemasu', meaning: '戴、佩戴（眼镜）', conjugations: { dictionary: 'かける', masu: 'かけます', te: 'かけて', nai: 'かけない', ta: 'かけた' }, sentences: [{ ja: '眼鏡をかけます。', zh: '戴眼镜。' }] },
    { id: 'L22-W15', category: 'Nouns', kanji: 'パリ', kana: 'パリ', romaji: 'pari', meaning: '巴黎', sentences: [{ ja: 'パリへ行ったとき、かばんを買いました。', zh: '去巴黎的时候买了包。' }] },
    { id: 'L22-W16', category: 'Nouns', kanji: '帽子', kana: 'ぼうし', romaji: 'boushi', meaning: '帽子', sentences: [{ ja: '帽子を被っている人がいます。', zh: '有个戴帽子的人。' }] },
    { id: 'L22-W17', category: 'Nouns', kanji: 'コート', kana: 'コート', romaji: 'kooto', meaning: '大衣', sentences: [{ ja: 'コートを着て出かけます。', zh: '穿上大衣出门。' }] },
    { id: 'L22-W18', category: 'Verbs', grammarType: 'Group I', kanji: '履きます', kana: 'はきます', romaji: 'hakimasu', meaning: '穿（鞋、裤子等）', conjugations: { dictionary: '履く', masu: '履きます', te: '履いて', nai: '履かない', ta: '履いた' }, sentences: [{ ja: '靴を履きます。', zh: '穿鞋。' }] },
    { id: 'L22-W19', category: 'Verbs', grammarType: 'Irregular', kanji: 'します', kana: 'します', romaji: 'shimasu', meaning: '穿、戴（领带等）', conjugations: { dictionary: 'する', masu: 'します', te: 'して', nai: 'しない', ta: 'した' }, sentences: [{ ja: 'ネクタイをします。', zh: '系领带。' }] },
    { id: 'L22-W20', category: 'Verbs', grammarType: 'Group I', kanji: '被ります', kana: 'かぶります', romaji: 'kaburimasu', meaning: '戴（帽子等）', conjugations: { dictionary: '被る', masu: '被ります', te: '被って', nai: '被らない', ta: '被った' }, sentences: [{ ja: '帽子を被ります。', zh: '戴帽子。' }] },
    { id: 'L22-W21', category: 'Verbs', grammarType: 'Group II', kanji: '生まれます', kana: 'うまれます', romaji: 'umaremasu', meaning: '出生', conjugations: { dictionary: '生まれる', masu: '生まれます', te: '生まれて', nai: '生まれない', ta: '生まれた' }, sentences: [{ ja: '彼が生まれた所を知っていますか。', zh: '你知道他出生的地方吗？' }] },
    { id: 'L22-W22', category: 'Nouns', kanji: 'お弁当', kana: 'おべんとう', romaji: 'obentou', meaning: '盒饭', sentences: [{ ja: 'お弁当を持って行きます。', zh: '带盒饭去。' }] },
    { id: 'L22-W23', category: 'Nouns', kanji: '私達', kana: 'わたしたち', romaji: 'watashitachi', meaning: '我们', sentences: [{ ja: '私達が習ったことばを使います。', zh: '使用我们学过的词。' }] },
    { id: 'L22-W24', category: 'Nouns', kanji: '都合', kana: 'つごう', romaji: 'tsugou', meaning: '方便；情况', sentences: [{ ja: '都合が悪いです。', zh: '不方便。' }] },
    { id: 'L22-W25', category: 'Adverbs', kanji: 'よく', kana: 'よく', romaji: 'yoku', meaning: '经常；很', sentences: [{ ja: 'よく友達に会います。', zh: '经常见朋友。' }] },
    { id: 'L22-W26', category: 'Nouns', kanji: 'セーター', kana: 'セーター', romaji: 'seetaa', meaning: '毛衣', sentences: [{ ja: '新しいセーターを買いました。', zh: '买了新毛衣。' }] },
    { id: 'L22-W27', category: 'Nouns', kanji: 'スーツ', kana: 'スーツ', romaji: 'suutsu', meaning: '套装', sentences: [{ ja: 'スーツを着て会社へ行きます。', zh: '穿西装去公司。' }] },
    { id: 'L22-W28', category: 'Expressions', kanji: 'えーと', kana: 'えーと', romaji: 'eeto', meaning: '那个（思考时）', sentences: [{ ja: 'えーと、駅から遠くない所がいいです。', zh: '嗯，离车站不远的地方比较好。' }] },
    { id: 'L22-W29', category: 'Expressions', kanji: 'おめでとうございます', kana: 'おめでとうございます', romaji: 'omedetou gozaimasu', meaning: '恭喜；祝贺', sentences: [{ ja: '成人式、おめでとうございます。', zh: '祝贺成人礼。' }] },
    { id: 'L22-W30', category: 'Nouns', kanji: '成人式', kana: 'せいじんしき', romaji: 'seijinshiki', meaning: '成人礼', sentences: [{ ja: '成人式で着物を着ます。', zh: '成人礼上穿和服。' }] }
  ],
  23: [
    { "id": "L23-W1", "category": "Nouns", "kanji": "元気茶", "kana": "げんきちゃ", "romaji": "genkicha", "meaning": "健康茶（虚构的饮品）", "sentences": [{ "ja": "体の調子が悪いとき、「元気茶」を飲みます。", "zh": "身体状态不好时，喝“健康茶”。" }] },
    { "id": "L23-W2", "category": "Nouns", "kanji": "お湯", "kana": "おゆ", "romaji": "oyu", "meaning": "热水，开水", "sentences": [{ "ja": "お湯が出ません。", "zh": "热水不出来。" }] },
    { "id": "L23-W3", "category": "Verbs", "grammarType": "Group II", "kanji": "出ます", "kana": "でます", "romaji": "demasu", "meaning": "出来；找（钱）", "conjugations": { "masu": "出ます", "dictionary": "出る", "te": "出て", "nai": "出ない", "ta": "出た" }, "sentences": [{ "ja": "このボタンを押すと、お釣りが出ます。", "zh": "按这个按钮，零钱就会出来。" }, { "ja": "お湯が出ません。", "zh": "热水不出来。" }] },
    { "id": "L23-W4", "category": "Nouns", "kanji": "お釣り", "kana": "おつり", "romaji": "otsuri", "meaning": "找零，零钱", "sentences": [{ "ja": "お釣りが出ます。", "zh": "找零钱。" }] },
    { "id": "L23-W5", "category": "Nouns", "kanji": "本田駅", "kana": "ほんだえき", "romaji": "honda eki", "meaning": "本田站（虚构的车站）", "sentences": [{ "ja": "本田駅からバスに乗ってください。", "zh": "请从本田站坐公交车。" }] },
    { "id": "L23-W6", "category": "Nouns", "kanji": "図書館前", "kana": "としょかんまえ", "romaji": "toshokan mae", "meaning": "图书馆前（虚构的公共汽车站）", "sentences": [{ "ja": "図書館前で降りてください。", "zh": "请在图书馆前下车。" }] },
    { "id": "L23-W7", "category": "Expressions", "kanji": "一目", "kana": "いちめ", "romaji": "ichime", "meaning": "第一（指顺序）", "sentences": [{ "ja": "一つ目の信号を右へ曲がります。", "zh": "在第一个红绿灯向右拐。" }] },
    { "id": "L23-W8", "category": "Expressions", "kanji": "三つ目", "kana": "みっつめ", "romaji": "mittsume", "meaning": "第三个", "sentences": [{ "ja": "三つ目で降りてください。", "zh": "请在第三个下车。" }] },
    { "id": "L23-W9", "category": "Nouns", "kanji": "建物", "kana": "たてもの", "romaji": "tatemono", "meaning": "建筑物", "sentences": [{ "ja": "図書館は公園の中の白い建物です。", "zh": "图书馆是公园里的白色建筑物。" }] },
    { "id": "L23-W10", "category": "Nouns", "kanji": "道", "kana": "みち", "romaji": "michi", "meaning": "道路", "sentences": [{ "ja": "道を渡ります。", "zh": "过马路。" }] },
    { "id": "L23-W11", "category": "Verbs", "grammarType": "Group I", "kanji": "渡ります", "kana": "わたります", "romaji": "watarimasu", "meaning": "渡过，过", "conjugations": { "masu": "渡ります", "dictionary": "渡る", "te": "渡って", "nai": "渡らない", "ta": "渡った" }, "sentences": [{ "ja": "橋を渡ります。", "zh": "过桥。" }, { "ja": "道を渡ります。", "zh": "过马路。" }] },
    { "id": "L23-W12", "category": "Verbs", "grammarType": "Group I", "kanji": "聞きます", "kana": "ききます", "romaji": "kikimasu", "meaning": "问", "conjugations": { "masu": "聞きます", "dictionary": "聞く", "te": "聞いて", "nai": "聞かない", "ta": "聞いた" }, "sentences": [{ "ja": "先生に聞きます。", "zh": "问老师。" }, { "ja": "道を聞きます。", "zh": "问路。" }] },
    { "id": "L23-W13", "category": "Nouns", "kanji": "社長", "kana": "しゃちょう", "romaji": "shachou", "meaning": "社长", "sentences": [{ "ja": "社長に聞きます。", "zh": "问社长。" }] },
    { "id": "L23-W14", "category": "Verbs", "grammarType": "Group I", "kanji": "回します", "kana": "まわします", "romaji": "mawashimasu", "meaning": "传递，转", "conjugations": { "masu": "回します", "dictionary": "回す", "te": "回して", "nai": "回さない", "ta": "回した" }, "sentences": [{ "ja": "ボタンを右へ回します。", "zh": "把按钮向右转。" }] },
    { "id": "L23-W15", "category": "Nouns", "kanji": "音", "kana": "おと", "romaji": "oto", "meaning": "（物体发出的）声音", "sentences": [{ "ja": "変な音がします。", "zh": "有奇怪的声音。" }] },
    { "id": "L23-W16", "category": "Adjectives", "grammarType": "i-adj", "kanji": "寂しい", "kana": "さびしい", "romaji": "sabishii", "meaning": "寂寞", "sentences": [{ "ja": "一人でいるとき、寂しいです。", "zh": "一个人的时候很寂寞。" }] },
    { "id": "L23-W17", "category": "Adverbs", "kanji": "何回も", "kana": "なんかいも", "romaji": "nankaimo", "meaning": "多次，好几次", "sentences": [{ "ja": "何回もボタンを押しました。", "zh": "按了很多次按钮。" }] },
    { "id": "L23-W18", "category": "Verbs", "grammarType": "Group I", "kanji": "引きます", "kana": "ひきます", "romaji": "hikimasu", "meaning": "拉，拽", "conjugations": { "masu": "引きます", "dictionary": "引く", "te": "引いて", "nai": "引かない", "ta": "引いた" }, "sentences": [{ "ja": "ドアを引きます。", "zh": "拉门。" }] },
    { "id": "L23-W19", "category": "Verbs", "grammarType": "Group I", "kanji": "触ります", "kana": "さわります", "romaji": "sawarimasu", "meaning": "摸，碰", "conjugations": { "masu": "触ります", "dictionary": "触る", "te": "触って", "nai": "触らない", "ta": "触った" }, "sentences": [{ "ja": "ドアに触ります。", "zh": "碰到门。" }] },
    { "id": "L23-W20", "category": "Nouns", "kanji": "交差点", "kana": "こうさてん", "romaji": "kousaten", "meaning": "十字路口", "sentences": [{ "ja": "交差点を右へ曲がります。", "zh": "在十字路口向右拐。" }] },
    { "id": "L23-W21", "category": "Nouns", "kanji": "駐車場", "kana": "ちゅうしゃじょう", "romaji": "chuushajou", "meaning": "停车场", "sentences": [{ "ja": "駐車場は建物の前にあります。", "zh": "停车场在建筑物前面。" }] },
    { "id": "L23-W22", "category": "Nouns", "kanji": "橋", "kana": "はし", "romaji": "hashi", "meaning": "桥", "sentences": [{ "ja": "橋を渡ります。", "zh": "过桥。" }] },
    { "id": "L23-W23", "category": "Verbs", "grammarType": "Group I", "kanji": "歩きます", "kana": "あるきます", "romaji": "arukimasu", "meaning": "走", "conjugations": { "masu": "歩きます", "dictionary": "歩く", "te": "歩いて", "nai": "歩かない", "ta": "歩いた" }, "sentences": [{ "ja": "駅まで歩きます。", "zh": "走到车站。" }] },
    { "id": "L23-W24", "category": "Nouns", "kanji": "サイズ", "kana": "サイズ", "romaji": "saizu", "meaning": "号码，尺寸", "sentences": [{ "ja": "サイズを変えます。", "zh": "换尺寸。" }] },
    { "id": "L23-W25", "category": "Verbs", "grammarType": "Group II", "kanji": "変えます", "kana": "かえます", "romaji": "kaemasu", "meaning": "改变", "conjugations": { "masu": "変えます", "dictionary": "変える", "te": "変えて", "nai": "変えない", "ta": "変えた" }, "sentences": [{ "ja": "服のサイズを変えます。", "zh": "换衣服的尺寸。" }] },
    { "id": "L23-W26", "category": "Nouns", "kanji": "故障", "kana": "こしょう", "romaji": "koshou", "meaning": "故障", "sentences": [{ "ja": "この機械は故障です。", "zh": "这台机器故障了。" }] },
    { "id": "L23-W27", "category": "Verbs", "grammarType": "Irregular", "kanji": "故障します", "kana": "こしょうします", "romaji": "koshou shimasu", "meaning": "出故障", "conjugations": { "masu": "故障します", "dictionary": "故障する", "te": "故障して", "nai": "故障しない", "ta": "故障した" }, "sentences": [{ "ja": "自動販売機が故障しました。", "zh": "自动售货机出故障了。" }] },
    { "id": "L23-W28", "category": "Nouns", "kanji": "信号", "kana": "しんごう", "romaji": "shingou", "meaning": "红绿灯", "sentences": [{ "ja": "信号を左へ曲がります。", "zh": "在红绿灯向左拐。" }] },
    { "id": "L23-W29", "category": "Verbs", "grammarType": "Group I", "kanji": "曲がります", "kana": "まがります", "romaji": "magarimasu", "meaning": "拐，转弯", "conjugations": { "masu": "曲がります", "dictionary": "曲がる", "te": "曲がって", "nai": "曲がらない", "ta": "曲がった" }, "sentences": [{ "ja": "右へ曲がります。", "zh": "往右拐。" }, { "ja": "角を曲がります。", "zh": "在拐角转弯。" }] },
    { "id": "L23-W30", "category": "Nouns", "kanji": "角", "kana": "かど", "romaji": "kado", "meaning": "拐角，路口", "sentences": [{ "ja": "角を右へ曲がってください。", "zh": "请在拐角向右拐。" }] },
    { "id": "L23-W31", "category": "Nouns", "kanji": "聖徳太子", "kana": "しょうとくたいし", "romaji": "shoutoku taishi", "meaning": "圣德太子（574-622）", "sentences": [{ "ja": "これは聖徳太子の写真です。", "zh": "这是圣德太子的照片。" }] },
    { "id": "L23-W32", "category": "Nouns", "kanji": "法隆寺", "kana": "ほうりゅうじ", "romaji": "houryuuji", "meaning": "法隆寺（位于奈良的寺庙）", "sentences": [{ "ja": "法隆寺は奈良にあります。", "zh": "法隆寺在奈良。" }] }
  ],
  24: [
    { id: 'L24-W1', category: 'Verbs', grammarType: 'Group II', kanji: 'くれます', kana: 'くれます', romaji: 'kuremasu', meaning: '给（我、我方）', conjugations: { dictionary: 'くれる', masu: 'くれます', te: 'くれて', nai: 'くれない', ta: 'くれた' }, sentences: [{ ja: '佐藤さんはわたしにチョコレートをくれました。', zh: '佐藤给了我巧克力。' }] },
    { id: 'L24-W2', category: 'Verbs', grammarType: 'Group I', kanji: '直します', kana: 'なおします', romaji: 'naoshimasu', meaning: '修理；修改', conjugations: { dictionary: '直す', masu: '直します', te: '直して', nai: '直さない', ta: '直した' }, sentences: [{ ja: 'レポートを直してもらいました。', zh: '请别人帮我修改了报告。' }] },
    { id: 'L24-W3', category: 'Verbs', grammarType: 'Group I', kanji: '送ります', kana: 'おくります', romaji: 'okurimasu', meaning: '送；寄', conjugations: { dictionary: '送る', masu: '送ります', te: '送って', nai: '送らない', ta: '送った' }, sentences: [{ ja: '山田さんが車で送ってくれました。', zh: '山田开车送了我。' }] },
    { id: 'L24-W4', category: 'Grammar', kanji: '～てもらいます', kana: '～てもらいます', romaji: '~te moraimasu', meaning: '请别人为自己做某事', sentences: [{ ja: 'ワンさんに手伝ってもらいました。', zh: '请小王帮忙了。' }] },
    { id: 'L24-W5', category: 'Grammar', kanji: '～てくれます', kana: '～てくれます', romaji: '~te kuremasu', meaning: '别人为我做某事', sentences: [{ ja: '母はセーターを送ってくれました。', zh: '妈妈给我寄来了毛衣。' }] },
    { id: 'L24-W6', category: 'Grammar', kanji: '～てあげます', kana: '～てあげます', romaji: '~te agemasu', meaning: '为别人做某事', sentences: [{ ja: '太郎君にピアノを弾いてあげます。', zh: '给太郎弹钢琴。' }] },
    { id: 'L24-W7', category: 'Nouns', kanji: 'お菓子', kana: 'おかし', romaji: 'okashi', meaning: '点心', sentences: [{ ja: 'おばあちゃんはいつもお菓子をくれます。', zh: '奶奶总是给我点心。' }] },
    { id: 'L24-W8', category: 'Adverbs', kanji: '全部', kana: 'ぜんぶ', romaji: 'zenbu', meaning: '全部', sentences: [{ ja: '料理は全部自分で作りましたか。', zh: '菜全都是自己做的吗？' }] },
    { id: 'L24-W9', category: 'Nouns', kanji: '自分', kana: 'じぶん', romaji: 'jibun', meaning: '自己、本人', sentences: [{ ja: '全部自分で作りました。', zh: '全部是自己做的。' }] },
    { id: 'L24-W10', category: 'Adverbs', kanji: '自分で', kana: 'じぶんで', romaji: 'jibun de', meaning: '自己来～', sentences: [{ ja: '料理を自分で作ります。', zh: '自己做菜。' }] },
    { id: 'L24-W11', category: 'Nouns', kanji: '母の日', kana: 'ははのひ', romaji: 'haha no hi', meaning: '母亲节', sentences: [{ ja: '母の日に母に花をあげます。', zh: '母亲节送花给妈妈。' }] },
    { id: 'L24-W12', category: 'Nouns', kanji: '引っ越し', kana: 'ひっこし', romaji: 'hikkoshi', meaning: '搬家', sentences: [{ ja: '日曜日は引っ越しです。', zh: '星期天搬家。' }] },
    { id: 'L24-W13', category: 'Adverbs', kanji: 'ほかに', kana: 'ほかに', romaji: 'hoka ni', meaning: '另外', sentences: [{ ja: 'ほかにだれが手伝いに行きますか。', zh: '另外还有谁去帮忙？' }] },
    { id: 'L24-W14', category: 'Verbs', grammarType: 'Group I', kanji: '連れて行きます', kana: 'つれていきます', romaji: 'tsurete ikimasu', meaning: '领着去', conjugations: { dictionary: '連れて行く', masu: '連れて行きます', te: '連れて行って', nai: '連れて行かない', ta: '連れて行った' }, sentences: [{ ja: '子どもを連れて行きます。', zh: '带孩子去。' }] },
    { id: 'L24-W15', category: 'Verbs', grammarType: 'Irregular', kanji: '連れて来ます', kana: 'つれてきます', romaji: 'tsurete kimasu', meaning: '领着来', conjugations: { dictionary: '連れて来る', masu: '連れて来ます', te: '連れて来て', nai: '連れて来ない', ta: '連れて来た' }, sentences: [{ ja: '友達を連れて来ます。', zh: '带朋友来。' }] },
    { id: 'L24-W16', category: 'Verbs', grammarType: 'Irregular', kanji: '紹介します', kana: 'しょうかいします', romaji: 'shoukai shimasu', meaning: '介绍', conjugations: { dictionary: '紹介する', masu: '紹介します', te: '紹介して', nai: '紹介しない', ta: '紹介した' }, sentences: [{ ja: '先生を紹介します。', zh: '介绍老师。' }] },
    { id: 'L24-W17', category: 'Verbs', grammarType: 'Irregular', kanji: '案内します', kana: 'あんないします', romaji: 'annai shimasu', meaning: '导游；领路', conjugations: { dictionary: '案内する', masu: '案内します', te: '案内して', nai: '案内しない', ta: '案内した' }, sentences: [{ ja: '学校を案内します。', zh: '带人参观学校。' }] },
    { id: 'L24-W18', category: 'Nouns', kanji: 'お爺さん', kana: 'おじいさん', romaji: 'ojiisan', meaning: '爷爷；姥爷', sentences: [{ ja: 'おじいさんは元気です。', zh: '爷爷身体很好。' }] },
    { id: 'L24-W19', category: 'Nouns', kanji: 'お婆さん', kana: 'おばあさん', romaji: 'obaasan', meaning: '奶奶；姥姥', sentences: [{ ja: 'おばあさんに会いに行きます。', zh: '去见奶奶。' }] },
    { id: 'L24-W20', category: 'Nouns', kanji: '準備', kana: 'じゅんび', romaji: 'junbi', meaning: '准备', sentences: [{ ja: '引っ越しの準備をします。', zh: '做搬家的准备。' }] },
    { id: 'L24-W21', category: 'Nouns', kanji: 'ホームステイ', kana: 'ホームステイ', romaji: 'hoomusutei', meaning: '寄宿在当地人家', sentences: [{ ja: '日本でホームステイをします。', zh: '在日本寄宿家庭。' }] },
    { id: 'L24-W22', category: 'Verbs', grammarType: 'Irregular', kanji: '説明します', kana: 'せつめいします', romaji: 'setsumei shimasu', meaning: '说明、讲解', conjugations: { dictionary: '説明する', masu: '説明します', te: '説明して', nai: '説明しない', ta: '説明した' }, sentences: [{ ja: '先生が文法を説明してくれました。', zh: '老师给我们讲解了语法。' }] }
  ],
  25: [
    { id: 'L25-W1', category: 'Grammar', kanji: 'もし', kana: 'もし', romaji: 'moshi', meaning: '如果；要是', sentences: [{ ja: 'もし1億円あったら、何をしたいですか。', zh: '如果有一亿日元，你想做什么？' }] },
    { id: 'L25-W2', category: 'Nouns', kanji: '億', kana: 'おく', romaji: 'oku', meaning: '亿', sentences: [{ ja: '1億円あったら、学校を作りたいです。', zh: '如果有一亿日元，想建学校。' }] },
    { id: 'L25-W3', category: 'Verbs', grammarType: 'Group II', kanji: '考えます', kana: 'かんがえます', romaji: 'kangaemasu', meaning: '考虑；想', conjugations: { dictionary: '考える', masu: '考えます', te: '考えて', nai: '考えない', ta: '考えた' }, sentences: [{ ja: 'もう子どもの名前を考えましたか。', zh: '已经想好孩子的名字了吗？' }] },
    { id: 'L25-W4', category: 'Nouns', kanji: '意味', kana: 'いみ', romaji: 'imi', meaning: '意思', sentences: [{ ja: 'このことばの意味がわかりません。', zh: '不懂这个词的意思。' }] },
    { id: 'L25-W5', category: 'Nouns', kanji: '転勤', kana: 'てんきん', romaji: 'tenkin', meaning: '调动工作', sentences: [{ ja: '転勤、おめでとうございます。', zh: '恭喜调动工作。' }] },
    { id: 'L25-W6', category: 'Nouns', kanji: 'こと', kana: 'こと', romaji: 'koto', meaning: '事情', sentences: [{ ja: '大阪のことを忘れないでください。', zh: '请不要忘记大阪的事情。' }] },
    { id: 'L25-W7', category: 'Nouns', kanji: '暇', kana: 'ひま', romaji: 'hima', meaning: '空闲、有空', sentences: [{ ja: '暇があったら、東京へ遊びに来てください。', zh: '有空的话，请来东京玩。' }] },
    { id: 'L25-W8', category: 'Verbs', grammarType: 'Group I', kanji: '頑張ります', kana: 'がんばります', romaji: 'ganbarimasu', meaning: '加油；努力', conjugations: { dictionary: '頑張る', masu: '頑張ります', te: '頑張って', nai: '頑張らない', ta: '頑張った' }, sentences: [{ ja: '頑張ってください。', zh: '请加油。' }] },
    { id: 'L25-W9', category: 'Expressions', kanji: 'どうぞお元気で', kana: 'どうぞおげんきで', romaji: 'douzo ogenki de', meaning: '请多保重', sentences: [{ ja: '皆さんもどうぞお元気で。', zh: '也请大家多保重。' }] },
    { id: 'L25-W10', category: 'Nouns', kanji: '田舎', kana: 'いなか', romaji: 'inaka', meaning: '乡下；老家', sentences: [{ ja: '田舎へ帰りたいです。', zh: '想回老家。' }] },
    { id: 'L25-W11', category: 'Verbs', grammarType: 'Group I', kanji: '着きます', kana: 'つきます', romaji: 'tsukimasu', meaning: '到、到达', conjugations: { dictionary: '着く', masu: '着きます', te: '着いて', nai: '着かない', ta: '着いた' }, sentences: [{ ja: '駅に着いたら、電話をください。', zh: '到了车站后，请给我打电话。' }] },
    { id: 'L25-W12', category: 'Verbs', grammarType: 'Group II', kanji: '足ります', kana: 'たります', romaji: 'tarimasu', meaning: '够、足够', conjugations: { dictionary: '足りる', masu: '足ります', te: '足りて', nai: '足りない', ta: '足りた' }, sentences: [{ ja: '時間が足りません。', zh: '时间不够。' }] },
    { id: 'L25-W13', category: 'Nouns', kanji: 'チャンス', kana: 'チャンス', romaji: 'chansu', meaning: '机会', sentences: [{ ja: 'チャンスがあったら、行きたいです。', zh: '如果有机会，想去。' }] },
    { id: 'L25-W14', category: 'Verbs', grammarType: 'Group I', kanji: '取ります', kana: 'とります', romaji: 'torimasu', meaning: '取；上年纪', conjugations: { dictionary: '取る', masu: '取ります', te: '取って', nai: '取らない', ta: '取った' }, sentences: [{ ja: '年を取ります。', zh: '上年纪。' }] },
    { id: 'L25-W15', category: 'Expressions', kanji: 'もしもし', kana: 'もしもし', romaji: 'moshi moshi', meaning: '喂（打电话时）', sentences: [{ ja: 'もしもし、ミラーです。', zh: '喂，我是米勒。' }] },
    { id: 'L25-W16', category: 'Nouns', kanji: 'ベトナム', kana: 'ベトナム', romaji: 'betonamu', meaning: '越南', sentences: [{ ja: 'ベトナムへ行ったことがあります。', zh: '去过越南。' }] },
    { id: 'L25-W17', category: 'Nouns', kanji: '電車', kana: 'でんしゃ', romaji: 'densha', meaning: '电车', sentences: [{ ja: '電車が動かなかったら、歩いて帰ります。', zh: '如果电车不运行，就走回去。' }] },
    { id: 'L25-W18', category: 'Verbs', grammarType: 'Group I', kanji: '動きます', kana: 'うごきます', romaji: 'ugokimasu', meaning: '动；运行', conjugations: { dictionary: '動く', masu: '動きます', te: '動いて', nai: '動かない', ta: '動いた' }, sentences: [{ ja: '電車が動かなかったら、どうしますか。', zh: '如果电车不运行，怎么办？' }] },
    { id: 'L25-W19', category: 'Verbs', grammarType: 'Group II', kanji: 'つけます', kana: 'つけます', romaji: 'tsukemasu', meaning: '开（电器）', conjugations: { dictionary: 'つける', masu: 'つけます', te: 'つけて', nai: 'つけない', ta: 'つけた' }, sentences: [{ ja: '暑いとき、エアコンをつけますか。', zh: '热的时候开空调吗？' }] },
    { id: 'L25-W20', category: 'Nouns', kanji: '体', kana: 'からだ', romaji: 'karada', meaning: '身体', sentences: [{ ja: '体によくないと思います。', zh: '我觉得对身体不好。' }] }
  ],
  26: [
    { id: 'L26-W1', category: 'Grammar', kanji: '～んです', kana: '～んです', romaji: '~n desu', meaning: '说明情况、理由；确认事实', sentences: [{ ja: 'あしたから旅行なんです。', zh: '从明天开始要去旅行。' }] },
    { id: 'L26-W2', category: 'Grammar', kanji: '～ていただけませんか', kana: '～ていただけませんか', romaji: '~te itadakemasen ka', meaning: '能请您帮我……吗', sentences: [{ ja: 'いい先生を紹介していただけませんか。', zh: '能请您给我介绍一位好老师吗？' }] },
    { id: 'L26-W3', category: 'Grammar', kanji: '～たらいいですか', kana: '～たらいいですか', romaji: '~tara ii desu ka', meaning: '……的话好呢；应该怎么做', sentences: [{ ja: '国会議事堂を見学したいんですが、どうしたらいいですか。', zh: '我想参观国会议事堂，应该怎么做？' }] },
    { id: 'L26-W4', category: 'Nouns', kanji: '大阪弁', kana: 'おおさかべん', romaji: 'oosaka ben', meaning: '大阪话；大阪方言', sentences: [{ ja: '渡辺さんは時々大阪弁を使いますね。', zh: '渡边先生有时会用大阪话呢。' }] },
    { id: 'L26-W5', category: 'Nouns', kanji: 'エドヤストア', kana: 'エドヤストア', romaji: 'edoya sutoa', meaning: '江户屋商店（虚构店名）', sentences: [{ ja: 'エドヤストアで買いました。', zh: '在江户屋商店买的。' }] },
    { id: 'L26-W6', category: 'Verbs', grammarType: 'Group II', kanji: '遅れます', kana: 'おくれます', romaji: 'okuremasu', meaning: '迟到；没赶上', conjugations: { dictionary: '遅れる', masu: '遅れます', te: '遅れて', nai: '遅れない', ta: '遅れた' }, sentences: [{ ja: 'どうして遅れたんですか。', zh: '为什么迟到了？' }] },
    { id: 'L26-W7', category: 'Verbs', grammarType: 'Group II', kanji: '見ます', kana: 'みます', romaji: 'mimasu', meaning: '看；诊察', conjugations: { dictionary: '見る', masu: '見ます', te: '見て', nai: '見ない', ta: '見た' }, sentences: [{ ja: 'レポートを見ていただけませんか。', zh: '能请您看一下报告吗？' }] },
    { id: 'L26-W8', category: 'Nouns', kanji: '国会議事堂', kana: 'こっかいぎじどう', romaji: 'kokkai gijidou', meaning: '国会议事堂', sentences: [{ ja: '国会議事堂を見学したいんです。', zh: '我想参观国会议事堂。' }] },
    { id: 'L26-W9', category: 'Adverbs', kanji: '直接', kana: 'ちょくせつ', romaji: 'chokusetsu', meaning: '直接', sentences: [{ ja: '直接行ったらいいですよ。', zh: '直接去就可以。' }] },
    { id: 'L26-W10', category: 'Nouns', kanji: '平日', kana: 'へいじつ', romaji: 'heijitsu', meaning: '平日；工作日', sentences: [{ ja: '平日はいつでも見ることができます。', zh: '平日随时都可以参观。' }] },
    { id: 'L26-W11', category: 'Expressions', kanji: 'いつでも', kana: 'いつでも', romaji: 'itsu demo', meaning: '随时', sentences: [{ ja: '平日はいつでも見ることができます。', zh: '平日随时都可以参观。' }] },
    { id: 'L26-W12', category: 'Expressions', kanji: 'どこでも', kana: 'どこでも', romaji: 'doko demo', meaning: '任何地方都～', sentences: [{ ja: 'どこでも日本語を勉強できます。', zh: '在哪里都能学习日语。' }] },
    { id: 'L26-W13', category: 'Expressions', kanji: 'だれでも', kana: 'だれでも', romaji: 'dare demo', meaning: '任何人都～', sentences: [{ ja: 'だれでも参加できます。', zh: '任何人都可以参加。' }] },
    { id: 'L26-W14', category: 'Nouns', kanji: 'ごみ', kana: 'ごみ', romaji: 'gomi', meaning: '垃圾', sentences: [{ ja: 'ごみを捨てたいんですが、どこに出したらいいですか。', zh: '我想扔垃圾，应该放到哪里？' }] },
    { id: 'L26-W15', category: 'Verbs', grammarType: 'Group I', kanji: '出します', kana: 'だします', romaji: 'dashimasu', meaning: '拿出；扔（垃圾）', conjugations: { dictionary: '出す', masu: '出します', te: '出して', nai: '出さない', ta: '出した' }, sentences: [{ ja: '燃えるごみは月曜日と木曜日の朝出してください。', zh: '可燃垃圾请星期一和星期四早上扔。' }] },
    { id: 'L26-W16', category: 'Verbs', grammarType: 'Group I', kanji: '片づきます', kana: 'かたづきます', romaji: 'katazukimasu', meaning: '收拾好；整理好', conjugations: { dictionary: '片づく', masu: '片づきます', te: '片づいて', nai: '片づかない', ta: '片づいた' }, sentences: [{ ja: '引っ越しの荷物はだいたい片づきました。', zh: '搬家的行李基本收拾好了。' }] },
    { id: 'L26-W17', category: 'Nouns', kanji: '燃えるごみ', kana: 'もえるごみ', romaji: 'moeru gomi', meaning: '可燃垃圾', sentences: [{ ja: '燃えるごみは月曜日と木曜日の朝出してください。', zh: '可燃垃圾请星期一和星期四早上扔。' }] },
    { id: 'L26-W18', category: 'Nouns', kanji: '置き場', kana: 'おきば', romaji: 'okiba', meaning: '放置场所', sentences: [{ ja: 'ごみ置き場は駐車場の横です。', zh: '垃圾放置处在停车场旁边。' }] },
    { id: 'L26-W19', category: 'Nouns', kanji: '瓶', kana: 'びん', romaji: 'bin', meaning: '瓶', sentences: [{ ja: '瓶と缶は土曜日です。', zh: '瓶子和罐子是星期六扔。' }] },
    { id: 'L26-W20', category: 'Nouns', kanji: '缶', kana: 'かん', romaji: 'kan', meaning: '罐', sentences: [{ ja: '瓶や缶はいつですか。', zh: '瓶子和罐子什么时候扔？' }] },
    { id: 'L26-W21', category: 'Nouns', kanji: 'ガス会社', kana: 'ガスがいしゃ', romaji: 'gasu gaisha', meaning: '煤气公司', sentences: [{ ja: 'ガス会社に連絡したら、すぐ来てくれますよ。', zh: '联系煤气公司后，他们马上会来。' }] },
    { id: 'L26-W22', category: 'Verbs', grammarType: 'Irregular', kanji: '連絡します', kana: 'れんらくします', romaji: 'renraku shimasu', meaning: '联系', conjugations: { dictionary: '連絡する', masu: '連絡します', te: '連絡して', nai: '連絡しない', ta: '連絡した' }, sentences: [{ ja: 'ガス会社に連絡します。', zh: '联系煤气公司。' }] },
    { id: 'L26-W23', category: 'Nouns', kanji: 'フリーマーケット', kana: 'フリーマーケット', romaji: 'furii maaketto', meaning: '跳蚤市场', sentences: [{ ja: 'フリーマーケットで買いました。', zh: '在跳蚤市场买的。' }] },
    { id: 'L26-W24', category: 'Adverbs', kanji: 'ずいぶん', kana: 'ずいぶん', romaji: 'zuibun', meaning: '相当；很', sentences: [{ ja: 'ずいぶんにぎやかですね。', zh: '真热闹啊。' }] },
    { id: 'L26-W25', category: 'Verbs', grammarType: 'Group I', kanji: 'やります', kana: 'やります', romaji: 'yarimasu', meaning: '做；干；举办', conjugations: { dictionary: 'やる', masu: 'やります', te: 'やって', nai: 'やらない', ta: 'やった' }, sentences: [{ ja: '盆踊りの練習をやっています。', zh: '正在练习盂兰盆舞。' }] },
    { id: 'L26-W26', category: 'Nouns', kanji: '盆踊り', kana: 'ぼんおどり', romaji: 'bon odori', meaning: '盂兰盆会舞', sentences: [{ ja: '盆踊りの練習をしています。', zh: '正在练习盂兰盆舞。' }] },
    { id: 'L26-W27', category: 'Nouns', kanji: '財布', kana: 'さいふ', romaji: 'saifu', meaning: '钱包', sentences: [{ ja: '財布を拾いました。', zh: '捡到了钱包。' }] },
    { id: 'L26-W28', category: 'Verbs', grammarType: 'Group I', kanji: '間に合います', kana: 'まにあいます', romaji: 'ma ni aimasu', meaning: '赶得上；来得及', conjugations: { dictionary: '間に合う', masu: '間に合います', te: '間に合って', nai: '間に合わない', ta: '間に合った' }, sentences: [{ ja: '時間に間に合います。', zh: '赶得上时间。' }] },
    { id: 'L26-W29', category: 'Verbs', grammarType: 'Group I', kanji: '拾います', kana: 'ひろいます', romaji: 'hiroimasu', meaning: '拾；捡', conjugations: { dictionary: '拾う', masu: '拾います', te: '拾って', nai: '拾わない', ta: '拾った' }, sentences: [{ ja: '財布を拾いました。', zh: '捡到了钱包。' }] },
    { id: 'L26-W30', category: 'Verbs', grammarType: 'Group I', kanji: '探します', kana: 'さがします', romaji: 'sagashimasu', meaning: '寻找', conjugations: { dictionary: '探す', masu: '探します', te: '探して', nai: '探さない', ta: '探した' }, sentences: [{ ja: 'ボランティアを探しています。', zh: '正在找志愿者。' }] }
  ],
  27: [
    { id: 'L27-W1', category: 'Grammar', kanji: '可能動詞', kana: 'かのうどうし', romaji: 'kanou doushi', meaning: '可能动词；能……', sentences: [{ ja: 'わたしは日本語が少し話せます。', zh: '我会说一点日语。' }] },
    { id: 'L27-W2', category: 'Adverbs', kanji: 'はっきり', kana: 'はっきり', romaji: 'hakkiri', meaning: '清楚地', sentences: [{ ja: '山がはっきり見えます。', zh: '能清楚地看到山。' }] },
    { id: 'L27-W3', category: 'Verbs', grammarType: 'Group II', kanji: '見えます', kana: 'みえます', romaji: 'miemasu', meaning: '看得见', conjugations: { dictionary: '見える', masu: '見えます', te: '見えて', nai: '見えない', ta: '見えた' }, sentences: [{ ja: '天気がいい日には海が見えるんです。', zh: '天气好的日子可以看到海。' }] },
    { id: 'L27-W4', category: 'Verbs', grammarType: 'Group II', kanji: 'できます', kana: 'できます', romaji: 'dekimasu', meaning: '能；建成；做好', conjugations: { dictionary: 'できる', masu: 'できます', te: 'できて', nai: 'できない', ta: 'できた' }, sentences: [{ ja: '駅の前に大きいスーパーができました。', zh: '车站前建成了一家大超市。' }] },
    { id: 'L27-W5', category: 'Nouns', kanji: '鳥', kana: 'とり', romaji: 'tori', meaning: '鸟', sentences: [{ ja: '鳥の声が聞こえます。', zh: '能听见鸟叫声。' }] },
    { id: 'L27-W6', category: 'Nouns', kanji: '声', kana: 'こえ', romaji: 'koe', meaning: '声音（人或动物发出的）', sentences: [{ ja: '鳥の声が聞こえますね。', zh: '能听见鸟叫声呢。' }] },
    { id: 'L27-W7', category: 'Verbs', grammarType: 'Group II', kanji: '聞こえます', kana: 'きこえます', romaji: 'kikoemasu', meaning: '听得见', conjugations: { dictionary: '聞こえる', masu: '聞こえます', te: '聞こえて', nai: '聞こえない', ta: '聞こえた' }, sentences: [{ ja: 'ラジオの音が聞こえます。', zh: '能听见收音机的声音。' }] },
    { id: 'L27-W8', category: 'Particles', kanji: '～しか', kana: '～しか', romaji: '~shika', meaning: '只；仅（后接否定）', sentences: [{ ja: 'ローマ字しか書けません。', zh: '只会写罗马字。' }] },
    { id: 'L27-W9', category: 'Nouns', kanji: 'マンション', kana: 'マンション', romaji: 'manshon', meaning: '公寓', sentences: [{ ja: 'このマンションでペットが飼えますか。', zh: '这栋公寓可以养宠物吗？' }] },
    { id: 'L27-W10', category: 'Nouns', kanji: 'ペット', kana: 'ペット', romaji: 'petto', meaning: '宠物', sentences: [{ ja: 'ペットが飼えますか。', zh: '可以养宠物吗？' }] },
    { id: 'L27-W11', category: 'Verbs', grammarType: 'Group I', kanji: '飼います', kana: 'かいます', romaji: 'kaimasu', meaning: '饲养', conjugations: { dictionary: '飼う', masu: '飼います', te: '飼って', nai: '飼わない', ta: '飼った' }, sentences: [{ ja: '小さい鳥や魚は飼えます。', zh: '可以养小鸟和鱼。' }] },
    { id: 'L27-W12', category: 'Nouns', kanji: '家具', kana: 'かぐ', romaji: 'kagu', meaning: '家具', sentences: [{ ja: '自分で家具を作ることなんです。', zh: '是自己做家具。' }] },
    { id: 'L27-W13', category: 'Nouns', kanji: '本棚', kana: 'ほんだな', romaji: 'hondana', meaning: '书架', sentences: [{ ja: 'あの本棚も作ったんですか。', zh: '那个书架也是你做的吗？' }] },
    { id: 'L27-W14', category: 'Verbs', grammarType: 'Group II', kanji: '建てます', kana: 'たてます', romaji: 'tatemasu', meaning: '建；盖', conjugations: { dictionary: '建てる', masu: '建てます', te: '建てて', nai: '建てない', ta: '建てた' }, sentences: [{ ja: 'いつか自分で家を建てたいです。', zh: '总有一天想自己建房子。' }] },
    { id: 'L27-W15', category: 'Adjectives', grammarType: 'i-adj', kanji: '素晴らしい', kana: 'すばらしい', romaji: 'subarashii', meaning: '很棒；极好', sentences: [{ ja: 'すばらしい夢ですね。', zh: '真是很棒的梦想啊。' }] },
    { id: 'L27-W16', category: 'Nouns', kanji: '花火', kana: 'はなび', romaji: 'hanabi', meaning: '烟花', sentences: [{ ja: '花火が見えます。', zh: '能看到烟花。' }] },
    { id: 'L27-W17', category: 'Verbs', grammarType: 'Group I', kanji: '走ります', kana: 'はしります', romaji: 'hashirimasu', meaning: '跑；行驶', conjugations: { dictionary: '走る', masu: '走ります', te: '走って', nai: '走らない', ta: '走った' }, sentences: [{ ja: '道を走ります。', zh: '在路上跑。' }] },
    { id: 'L27-W18', category: 'Adjectives', grammarType: 'na-adj', kanji: '心配', kana: 'しんぱい', romaji: 'shinpai', meaning: '担心', sentences: [{ ja: '心配しないでください。', zh: '请不要担心。' }] },
    { id: 'L27-W19', category: 'Nouns', kanji: '波', kana: 'なみ', romaji: 'nami', meaning: '波浪', sentences: [{ ja: '波の音が聞こえます。', zh: '能听见海浪声。' }] },
    { id: 'L27-W20', category: 'Nouns', kanji: '料理教室', kana: 'りょうりきょうしつ', romaji: 'ryouri kyoushitsu', meaning: '烹饪教室', sentences: [{ ja: '料理教室を開きます。', zh: '开烹饪教室。' }] },
    { id: 'L27-W21', category: 'Verbs', grammarType: 'Group I', kanji: '開きます', kana: 'ひらきます', romaji: 'hirakimasu', meaning: '开；举办', conjugations: { dictionary: '開く', masu: '開きます', te: '開いて', nai: '開かない', ta: '開いた' }, sentences: [{ ja: '教室を開きます。', zh: '开办教室。' }] },
    { id: 'L27-W22', category: 'Nouns', kanji: 'キッチン', kana: 'キッチン', romaji: 'kicchin', meaning: '厨房', sentences: [{ ja: 'キッチンで料理を作ります。', zh: '在厨房做菜。' }] },
    { id: 'L27-W23', category: 'Nouns', kanji: '道具', kana: 'どうぐ', romaji: 'dougu', meaning: '工具；道具', sentences: [{ ja: '家具を作る道具があります。', zh: '有做家具的工具。' }] },
    { id: 'L27-W24', category: 'Nouns', kanji: 'パーティールーム', kana: 'パーティールーム', romaji: 'paatii ruumu', meaning: '宴会厅', sentences: [{ ja: 'パーティールームがあります。', zh: '有宴会厅。' }] },
    { id: 'L27-W25', category: 'Nouns', kanji: '方', kana: 'かた', romaji: 'kata', meaning: '人（礼貌说法）', sentences: [{ ja: 'あの方は先生です。', zh: '那位是老师。' }] }
  ],
  28: [
    { id: 'L28-W1', category: 'Grammar', kanji: '～ながら', kana: '～ながら', romaji: '~nagara', meaning: '一边……一边……', sentences: [{ ja: '音楽を聞きながら食事します。', zh: '一边听音乐一边吃饭。' }] },
    { id: 'L28-W2', category: 'Grammar', kanji: '～ています', kana: '～ています', romaji: '~te imasu', meaning: '表示习惯性、持续性的动作', sentences: [{ ja: '毎朝ジョギングをしています。', zh: '每天早上跑步。' }] },
    { id: 'L28-W3', category: 'Grammar', kanji: '～し、～し', kana: '～し、～し', romaji: '~shi, ~shi', meaning: '列举理由或特征', sentences: [{ ja: '地下鉄は速いし、安いし、地下鉄で行きましょう。', zh: '地铁又快又便宜，我们坐地铁去吧。' }] },
    { id: 'L28-W4', category: 'Nouns', kanji: 'ガム', kana: 'ガム', romaji: 'gamu', meaning: '口香糖', sentences: [{ ja: 'ガムをかみながら運転します。', zh: '一边嚼口香糖一边开车。' }] },
    { id: 'L28-W5', category: 'Verbs', grammarType: 'Group I', kanji: '噛みます', kana: 'かみます', romaji: 'kamimasu', meaning: '嚼；咬', conjugations: { dictionary: '噛む', masu: '噛みます', te: '噛んで', nai: '噛まない', ta: '噛んだ' }, sentences: [{ ja: 'ガムを噛みます。', zh: '嚼口香糖。' }] },
    { id: 'L28-W6', category: 'Adverbs', kanji: 'しばらく', kana: 'しばらく', romaji: 'shibaraku', meaning: '一会儿；暂时', sentences: [{ ja: '車を止めて、しばらく寝ます。', zh: '把车停下，睡一会儿。' }] },
    { id: 'L28-W7', category: 'Adjectives', grammarType: 'i-adj', kanji: '偉い', kana: 'えらい', romaji: 'erai', meaning: '了不起；伟大', sentences: [{ ja: '彼は働きながら大学で勉強しています。偉いですね。', zh: '他一边工作一边在大学学习，真了不起。' }] },
    { id: 'L28-W8', category: 'Adverbs', kanji: '大抵', kana: 'たいてい', romaji: 'taitei', meaning: '大多；通常', sentences: [{ ja: '休みの日はたいてい絵をかいています。', zh: '休息日通常画画。' }] },
    { id: 'L28-W9', category: 'Adjectives', grammarType: 'na-adj', kanji: '熱心', kana: 'ねっしん', romaji: 'nesshin', meaning: '热心；热情', sentences: [{ ja: 'ワット先生は熱心だし、おもしろいし、いい先生です。', zh: '瓦特老师又热心又有趣，是位好老师。' }] },
    { id: 'L28-W10', category: 'Nouns', kanji: '経験', kana: 'けいけん', romaji: 'keiken', meaning: '经验', sentences: [{ ja: 'ワット先生は経験もあります。', zh: '瓦特老师也有经验。' }] },
    { id: 'L28-W11', category: 'Verbs', grammarType: 'Group I', kanji: '選びます', kana: 'えらびます', romaji: 'erabimasu', meaning: '选择', conjugations: { dictionary: '選ぶ', masu: '選びます', te: '選んで', nai: '選ばない', ta: '選んだ' }, sentences: [{ ja: 'どうして富士大学を選んだんですか。', zh: '为什么选择富士大学？' }] },
    { id: 'L28-W12', category: 'Nouns', kanji: '会話', kana: 'かいわ', romaji: 'kaiwa', meaning: '会话', sentences: [{ ja: '会話の先生になっていただけませんか。', zh: '能请您做我的会话老师吗？' }] },
    { id: 'L28-W13', category: 'Nouns', kanji: '息子', kana: 'むすこ', romaji: 'musuko', meaning: '儿子（自己的）', sentences: [{ ja: '息子は大学に通っています。', zh: '我儿子在上大学。' }] },
    { id: 'L28-W14', category: 'Nouns', kanji: '娘', kana: 'むすめ', romaji: 'musume', meaning: '女儿（自己的）', sentences: [{ ja: '娘は英語を勉強しています。', zh: '我女儿在学英语。' }] },
    { id: 'L28-W15', category: 'Nouns', kanji: '力', kana: 'ちから', romaji: 'chikara', meaning: '力量；力气', sentences: [{ ja: '力が強いです。', zh: '力气很大。' }] },
    { id: 'L28-W16', category: 'Nouns', kanji: '味', kana: 'あじ', romaji: 'aji', meaning: '味道', sentences: [{ ja: '味もいいし、値段も安いです。', zh: '味道也好，价格也便宜。' }] },
    { id: 'L28-W17', category: 'Verbs', grammarType: 'Group I', kanji: '踊ります', kana: 'おどります', romaji: 'odorimasu', meaning: '跳舞', conjugations: { dictionary: '踊る', masu: '踊ります', te: '踊って', nai: '踊らない', ta: '踊った' }, sentences: [{ ja: '盆踊りを踊ります。', zh: '跳盂兰盆舞。' }] },
    { id: 'L28-W18', category: 'Verbs', grammarType: 'Irregular', kanji: 'メモします', kana: 'メモします', romaji: 'memo shimasu', meaning: '记笔记', conjugations: { dictionary: 'メモする', masu: 'メモします', te: 'メモして', nai: 'メモしない', ta: 'メモした' }, sentences: [{ ja: '大切なことをメモします。', zh: '把重要的事情记下来。' }] },
    { id: 'L28-W19', category: 'Nouns', kanji: '番組', kana: 'ばんぐみ', romaji: 'bangumi', meaning: '节目', sentences: [{ ja: '好きなテレビ番組があります。', zh: '有喜欢的电视节目。' }] },
    { id: 'L28-W20', category: 'Verbs', grammarType: 'Irregular', kanji: '通います', kana: 'かよいます', romaji: 'kayoimasu', meaning: '上学；定期往返', conjugations: { dictionary: '通う', masu: '通います', te: '通って', nai: '通わない', ta: '通った' }, sentences: [{ ja: '大学に通っています。', zh: '在上大学。' }] },
    { id: 'L28-W21', category: 'Nouns', kanji: '台所', kana: 'だいどころ', romaji: 'daidokoro', meaning: '厨房', sentences: [{ ja: '台所で料理を作ります。', zh: '在厨房做饭。' }] },
    { id: 'L28-W22', category: 'Nouns', kanji: '形', kana: 'かたち', romaji: 'katachi', meaning: '形状；样子', sentences: [{ ja: 'この時計は形がいいです。', zh: '这块表形状好看。' }] },
    { id: 'L28-W23', category: 'Nouns', kanji: '景色', kana: 'けしき', romaji: 'keshiki', meaning: '景色', sentences: [{ ja: '景色がきれいです。', zh: '景色很美。' }] },
    { id: 'L28-W24', category: 'Verbs', grammarType: 'Group II', kanji: '売れます', kana: 'うれます', romaji: 'uremasu', meaning: '畅销；卖得好', conjugations: { dictionary: '売れる', masu: '売れます', te: '売れて', nai: '売れない', ta: '売れた' }, sentences: [{ ja: 'このパンはよく売れます。', zh: '这个面包很畅销。' }] },
    { id: 'L28-W25', category: 'Nouns', kanji: '人気', kana: 'にんき', romaji: 'ninki', meaning: '人气；受欢迎', sentences: [{ ja: 'あの歌手は人気があります。', zh: '那位歌手很有人气。' }] },
    { id: 'L28-W26', category: 'Nouns', kanji: '給料', kana: 'きゅうりょう', romaji: 'kyuuryou', meaning: '工资', sentences: [{ ja: '給料が高いし、休みも多いです。', zh: '工资高，假期也多。' }] },
    { id: 'L28-W27', category: 'Nouns', kanji: '将来', kana: 'しょうらい', romaji: 'shourai', meaning: '将来', sentences: [{ ja: '将来、日本語の先生になりたいです。', zh: '将来想成为日语老师。' }] },
    { id: 'L28-W28', category: 'Verbs', grammarType: 'Irregular', kanji: '参加します', kana: 'さんかします', romaji: 'sanka shimasu', meaning: '参加', conjugations: { dictionary: '参加する', masu: '参加します', te: '参加して', nai: '参加しない', ta: '参加した' }, sentences: [{ ja: 'イベントに参加します。', zh: '参加活动。' }] },
    { id: 'L28-W29', category: 'Verbs', grammarType: 'Group I', kanji: '誘います', kana: 'さそいます', romaji: 'sasoimasu', meaning: '邀请', conjugations: { dictionary: '誘う', masu: '誘います', te: '誘って', nai: '誘わない', ta: '誘った' }, sentences: [{ ja: '友達をイベントに誘います。', zh: '邀请朋友参加活动。' }] },
    { id: 'L28-W30', category: 'Nouns', kanji: '体育館', kana: 'たいいくかん', romaji: 'taiikukan', meaning: '体育馆', sentences: [{ ja: '体育館でイベントがあります。', zh: '体育馆有活动。' }] }
  ],
  29: [
    { id: 'L29-W1', category: 'Grammar', kanji: '～ています', kana: '～ています', romaji: '~te imasu', meaning: '表示动作结果留下的状态', sentences: [{ ja: '窓が閉まっています。', zh: '窗户关着。' }] },
    { id: 'L29-W2', category: 'Grammar', kanji: '～てしまいました', kana: '～てしまいました', romaji: '~te shimaimashita', meaning: '表示完成、遗憾或失误', sentences: [{ ja: '電車に傘を忘れてしまいました。', zh: '把伞忘在电车上了。' }] },
    { id: 'L29-W3', category: 'Verbs', grammarType: 'Group I', kanji: '閉まります', kana: 'しまります', romaji: 'shimarimasu', meaning: '关着；关闭（自动词）', conjugations: { dictionary: '閉まる', masu: '閉まります', te: '閉まって', nai: '閉まらない', ta: '閉まった' }, sentences: [{ ja: '窓が閉まっています。', zh: '窗户关着。' }] },
    { id: 'L29-W4', category: 'Verbs', grammarType: 'Group I', kanji: '掛かります', kana: 'かかります', romaji: 'kakarimasu', meaning: '上锁；挂着', conjugations: { dictionary: '掛かる', masu: '掛かります', te: '掛かって', nai: '掛からない', ta: '掛かった' }, sentences: [{ ja: '会議室の鍵が掛かっています。', zh: '会议室的钥匙锁着。' }] },
    { id: 'L29-W5', category: 'Verbs', grammarType: 'Group II', kanji: '間違えます', kana: 'まちがえます', romaji: 'machigaemasu', meaning: '弄错', conjugations: { dictionary: '間違える', masu: '間違えます', te: '間違えて', nai: '間違えない', ta: '間違えた' }, sentences: [{ ja: '道を間違えてしまいました。', zh: '走错路了。' }] },
    { id: 'L29-W6', category: 'Nouns', kanji: '忘れ物', kana: 'わすれもの', romaji: 'wasuremono', meaning: '遗失物品；忘带的东西', sentences: [{ ja: '忘れ物をしてしまいました。', zh: '遗忘东西了。' }] },
    { id: 'L29-W7', category: 'Nouns', kanji: '今の電車', kana: 'いまのでんしゃ', romaji: 'ima no densha', meaning: '刚才那趟电车', sentences: [{ ja: '今の電車に忘れ物をしてしまいました。', zh: '把东西忘在刚才那趟电车上了。' }] },
    { id: 'L29-W8', category: 'Nouns', kanji: '外側', kana: 'そとがわ', romaji: 'sotogawa', meaning: '外侧', sentences: [{ ja: '外側に大きいポケットが付いています。', zh: '外侧有一个大口袋。' }] },
    { id: 'L29-W9', category: 'Nouns', kanji: 'ポケット', kana: 'ポケット', romaji: 'poketto', meaning: '口袋', sentences: [{ ja: '大きいポケットが付いています。', zh: '带着一个大口袋。' }] },
    { id: 'L29-W10', category: 'Verbs', grammarType: 'Group I', kanji: '付きます', kana: 'つきます', romaji: 'tsukimasu', meaning: '带有；附着', conjugations: { dictionary: '付く', masu: '付きます', te: '付いて', nai: '付かない', ta: '付いた' }, sentences: [{ ja: 'ポケットが付いています。', zh: '带着口袋。' }] },
    { id: 'L29-W11', category: 'Nouns', kanji: '網棚', kana: 'あみだな', romaji: 'amidana', meaning: '行李架', sentences: [{ ja: '網棚の上に置きました。', zh: '放在行李架上了。' }] },
    { id: 'L29-W12', category: 'Adverbs', kanji: '確か', kana: 'たしか', romaji: 'tashika', meaning: '大概；我记得', sentences: [{ ja: '確か、本と傘が入っています。', zh: '我记得里面有书和伞。' }] },
    { id: 'L29-W13', category: 'Verbs', grammarType: 'Group I', kanji: '開きます', kana: 'あきます', romaji: 'akimasu', meaning: '开着；打开（自动词）', conjugations: { dictionary: '開く', masu: '開きます', te: '開いて', nai: '開かない', ta: '開いた' }, sentences: [{ ja: 'ドアが開いています。', zh: '门开着。' }] },
    { id: 'L29-W14', category: 'Verbs', grammarType: 'Group I', kanji: '止まります', kana: 'とまります', romaji: 'tomarimasu', meaning: '停下；停着', conjugations: { dictionary: '止まる', masu: '止まります', te: '止まって', nai: '止まらない', ta: '止まった' }, sentences: [{ ja: '車が止まっています。', zh: '车停着。' }] },
    { id: 'L29-W15', category: 'Nouns', kanji: 'ガラス', kana: 'ガラス', romaji: 'garasu', meaning: '玻璃', sentences: [{ ja: 'ガラスが割れています。', zh: '玻璃碎了。' }] },
    { id: 'L29-W16', category: 'Verbs', grammarType: 'Group II', kanji: '割れます', kana: 'われます', romaji: 'waremasu', meaning: '碎；裂开', conjugations: { dictionary: '割れる', masu: '割れます', te: '割れて', nai: '割れない', ta: '割れた' }, sentences: [{ ja: 'コップが割れてしまいました。', zh: '杯子碎了。' }] },
    { id: 'L29-W17', category: 'Nouns', kanji: '袋', kana: 'ふくろ', romaji: 'fukuro', meaning: '袋子', sentences: [{ ja: '袋に入れてください。', zh: '请放进袋子里。' }] },
    { id: 'L29-W18', category: 'Verbs', grammarType: 'Group I', kanji: '破れます', kana: 'やぶれます', romaji: 'yaburemasu', meaning: '破；撕破', conjugations: { dictionary: '破れる', masu: '破れます', te: '破れて', nai: '破れない', ta: '破れた' }, sentences: [{ ja: '袋が破れてしまいました。', zh: '袋子破了。' }] },
    { id: 'L29-W19', category: 'Verbs', grammarType: 'Group I', kanji: '落とします', kana: 'おとします', romaji: 'otoshimasu', meaning: '弄掉；丢下', conjugations: { dictionary: '落とす', masu: '落とします', te: '落として', nai: '落とさない', ta: '落とした' }, sentences: [{ ja: '財布を落としてしまいました。', zh: '把钱包弄丢了。' }] },
    { id: 'L29-W20', category: 'Verbs', grammarType: 'Group II', kanji: '壊れます', kana: 'こわれます', romaji: 'kowaremasu', meaning: '坏；坏掉', conjugations: { dictionary: '壊れる', masu: '壊れます', te: '壊れて', nai: '壊れない', ta: '壊れた' }, sentences: [{ ja: 'いすが壊れています。', zh: '椅子坏了。' }] },
    { id: 'L29-W21', category: 'Verbs', grammarType: 'Group I', kanji: '付きます', kana: 'つきます', romaji: 'tsukimasu', meaning: '灯亮；打开（电器）', conjugations: { dictionary: '付く', masu: '付きます', te: '付いて', nai: '付かない', ta: '付いた' }, sentences: [{ ja: '電気がついています。', zh: '灯亮着。' }] },
    { id: 'L29-W22', category: 'Verbs', grammarType: 'Group II', kanji: '汚れます', kana: 'よごれます', romaji: 'yogoremasu', meaning: '脏', conjugations: { dictionary: '汚れる', masu: '汚れます', te: '汚れて', nai: '汚れない', ta: '汚れた' }, sentences: [{ ja: '服が汚れてしまいました。', zh: '衣服弄脏了。' }] },
    { id: 'L29-W23', category: 'Verbs', grammarType: 'Group I', kanji: '拭きます', kana: 'ふきます', romaji: 'fukimasu', meaning: '擦', conjugations: { dictionary: '拭く', masu: '拭きます', te: '拭いて', nai: '拭かない', ta: '拭いた' }, sentences: [{ ja: '机を拭きます。', zh: '擦桌子。' }] },
    { id: 'L29-W24', category: 'Verbs', grammarType: 'Group II', kanji: '片付けます', kana: 'かたづけます', romaji: 'katazukemasu', meaning: '收拾；整理', conjugations: { dictionary: '片付ける', masu: '片付けます', te: '片付けて', nai: '片付けない', ta: '片付けた' }, sentences: [{ ja: '部屋を片付けます。', zh: '收拾房间。' }] },
    { id: 'L29-W25', category: 'Verbs', grammarType: 'Group II', kanji: '外れます', kana: 'はずれます', romaji: 'hazuremasu', meaning: '脱落；掉了', conjugations: { dictionary: '外れる', masu: '外れます', te: '外れて', nai: '外れない', ta: '外れた' }, sentences: [{ ja: 'ボタンが外れました。', zh: '纽扣掉了。' }] },
    { id: 'L29-W26', category: 'Nouns', kanji: '書類', kana: 'しょるい', romaji: 'shorui', meaning: '文件；资料', sentences: [{ ja: '書類を片付けます。', zh: '整理文件。' }] },
    { id: 'L29-W27', category: 'Verbs', grammarType: 'Group II', kanji: '消えます', kana: 'きえます', romaji: 'kiemasu', meaning: '熄灭；消失', conjugations: { dictionary: '消える', masu: '消えます', te: '消えて', nai: '消えない', ta: '消えた' }, sentences: [{ ja: '電気が消えています。', zh: '灯灭着。' }] },
    { id: 'L29-W28', category: 'Nouns', kanji: '地震', kana: 'じしん', romaji: 'jishin', meaning: '地震', sentences: [{ ja: '地震で壁が壊れました。', zh: '因为地震墙坏了。' }] },
    { id: 'L29-W29', category: 'Verbs', grammarType: 'Group II', kanji: '倒れます', kana: 'たおれます', romaji: 'taoremasu', meaning: '倒下；倒塌', conjugations: { dictionary: '倒れる', masu: '倒れます', te: '倒れて', nai: '倒れない', ta: '倒れた' }, sentences: [{ ja: '木が倒れています。', zh: '树倒着。' }] },
    { id: 'L29-W30', category: 'Verbs', grammarType: 'Group II', kanji: '燃えます', kana: 'もえます', romaji: 'moemasu', meaning: '燃烧', conjugations: { dictionary: '燃える', masu: '燃えます', te: '燃えて', nai: '燃えない', ta: '燃えた' }, sentences: [{ ja: '紙が燃えてしまいました。', zh: '纸烧掉了。' }] }
  ],
  30: [
    { id: 'L30-W1', category: 'Grammar', kanji: '～てあります', kana: '～てあります', romaji: '~te arimasu', meaning: '人为动作完成后留下的状态', sentences: [{ ja: '交番に町の地図が貼ってあります。', zh: '派出所贴着城市地图。' }] },
    { id: 'L30-W2', category: 'Grammar', kanji: '～ておきます', kana: '～ておきます', romaji: '~te okimasu', meaning: '事先做好；保持原状', sentences: [{ ja: '旅行の前に、インターネットでいろいろ調べておきます。', zh: '旅行前，先在网上查好各种信息。' }] },
    { id: 'L30-W3', category: 'Verbs', grammarType: 'Group I', kanji: '貼ります', kana: 'はります', romaji: 'harimasu', meaning: '贴', conjugations: { dictionary: '貼る', masu: '貼ります', te: '貼って', nai: '貼らない', ta: '貼った' }, sentences: [{ ja: '壁に地図を貼ります。', zh: '把地图贴在墙上。' }] },
    { id: 'L30-W4', category: 'Nouns', kanji: '引き出し', kana: 'ひきだし', romaji: 'hikidashi', meaning: '抽屉', sentences: [{ ja: 'セロテープは引き出しにしまってあります。', zh: '透明胶带放在抽屉里。' }] },
    { id: 'L30-W5', category: 'Verbs', grammarType: 'Group I', kanji: 'しまいます', kana: 'しまいます', romaji: 'shimaimasu', meaning: '收拾；放好', conjugations: { dictionary: 'しまう', masu: 'しまいます', te: 'しまって', nai: 'しまわない', ta: 'しまった' }, sentences: [{ ja: '資料を引き出しにしまいます。', zh: '把资料收进抽屉。' }] },
    { id: 'L30-W6', category: 'Nouns', kanji: '元', kana: 'もと', romaji: 'moto', meaning: '原来；过去', sentences: [{ ja: '元の所に戻してください。', zh: '请放回原处。' }] },
    { id: 'L30-W7', category: 'Verbs', grammarType: 'Group I', kanji: '戻します', kana: 'もどします', romaji: 'modoshimasu', meaning: '归还；放回', conjugations: { dictionary: '戻す', masu: '戻します', te: '戻して', nai: '戻さない', ta: '戻した' }, sentences: [{ ja: 'はさみを元の所に戻しておいてください。', zh: '请把剪刀放回原处。' }] },
    { id: 'L30-W8', category: 'Expressions', kanji: 'そのまま', kana: 'そのまま', romaji: 'sono mama', meaning: '保持原样', sentences: [{ ja: 'そのままにしておいてください。', zh: '请保持原样。' }] },
    { id: 'L30-W9', category: 'Adverbs', kanji: 'まだ', kana: 'まだ', romaji: 'mada', meaning: '还；仍然', sentences: [{ ja: 'まだ使っています。', zh: '还在使用。' }] },
    { id: 'L30-W10', category: 'Nouns', kanji: '非常袋', kana: 'ひじょうぶくろ', romaji: 'hijou bukuro', meaning: '应急包', sentences: [{ ja: '非常袋を準備しておかないと。', zh: '必须准备好应急包。' }] },
    { id: 'L30-W11', category: 'Nouns', kanji: 'リュック', kana: 'リュック', romaji: 'ryukku', meaning: '背包', sentences: [{ ja: '大きいリュックが置いてありますね。', zh: '放着一个大背包呢。' }] },
    { id: 'L30-W12', category: 'Nouns', kanji: '非常時', kana: 'ひじょうじ', romaji: 'hijouji', meaning: '紧急时刻', sentences: [{ ja: '非常時に使う物を入れておく袋です。', zh: '是放紧急时使用物品的袋子。' }] },
    { id: 'L30-W13', category: 'Verbs', grammarType: 'Irregular', kanji: '生活します', kana: 'せいかつします', romaji: 'seikatsu shimasu', meaning: '生活', conjugations: { dictionary: '生活する', masu: '生活します', te: '生活して', nai: '生活しない', ta: '生活した' }, sentences: [{ ja: '3日ぐらい生活できる物が入れてあるんです。', zh: '里面放着能生活大约三天的东西。' }] },
    { id: 'L30-W14', category: 'Nouns', kanji: '懐中電灯', kana: 'かいちゅうでんとう', romaji: 'kaichuu dentou', meaning: '手电筒', sentences: [{ ja: '懐中電灯とか、ラジオとかがあります。', zh: '有手电筒、收音机之类的东西。' }] },
    { id: 'L30-W15', category: 'Nouns', kanji: '予定', kana: 'よてい', romaji: 'yotei', meaning: '预定；计划', sentences: [{ ja: '予定をカレンダーに書いておきます。', zh: '把计划先写在日历上。' }] },
    { id: 'L30-W16', category: 'Verbs', grammarType: 'Group II', kanji: '掛けます', kana: 'かけます', romaji: 'kakemasu', meaning: '挂', conjugations: { dictionary: '掛ける', masu: '掛けます', te: '掛けて', nai: '掛けない', ta: '掛けた' }, sentences: [{ ja: '壁に絵を掛けます。', zh: '把画挂在墙上。' }] },
    { id: 'L30-W17', category: 'Verbs', grammarType: 'Group II', kanji: '並べます', kana: 'ならべます', romaji: 'narabemasu', meaning: '排列；摆放', conjugations: { dictionary: '並べる', masu: '並べます', te: '並べて', nai: '並べない', ta: '並べた' }, sentences: [{ ja: '机の上に資料を並べてあります。', zh: '桌上摆着资料。' }] },
    { id: 'L30-W18', category: 'Nouns', kanji: 'ごみ箱', kana: 'ごみばこ', romaji: 'gomibako', meaning: '垃圾箱', sentences: [{ ja: 'ごみ箱は隅に置いてあります。', zh: '垃圾箱放在角落里。' }] },
    { id: 'L30-W19', category: 'Nouns', kanji: '隅', kana: 'すみ', romaji: 'sumi', meaning: '角落', sentences: [{ ja: '部屋の隅に置いてあります。', zh: '放在房间角落。' }] },
    { id: 'L30-W20', category: 'Nouns', kanji: '予定表', kana: 'よていひょう', romaji: 'yoteihyou', meaning: '计划表', sentences: [{ ja: '予定表を作っておきます。', zh: '事先做好计划表。' }] },
    { id: 'L30-W21', category: 'Verbs', grammarType: 'Group II', kanji: '決めます', kana: 'きめます', romaji: 'kimemasu', meaning: '决定', conjugations: { dictionary: '決める', masu: '決めます', te: '決めて', nai: '決めない', ta: '決めた' }, sentences: [{ ja: '名前を決めます。', zh: '决定名字。' }] },
    { id: 'L30-W22', category: 'Nouns', kanji: '人形', kana: 'にんぎょう', romaji: 'ningyou', meaning: '玩偶；娃娃', sentences: [{ ja: '人形が飾ってあります。', zh: '摆着玩偶。' }] },
    { id: 'L30-W23', category: 'Verbs', grammarType: 'Group I', kanji: '飾ります', kana: 'かざります', romaji: 'kazarimasu', meaning: '装饰', conjugations: { dictionary: '飾る', masu: '飾ります', te: '飾って', nai: '飾らない', ta: '飾った' }, sentences: [{ ja: '花を部屋に飾ります。', zh: '把花装饰在房间里。' }] },
    { id: 'L30-W24', category: 'Nouns', kanji: '鏡', kana: 'かがみ', romaji: 'kagami', meaning: '镜子', sentences: [{ ja: '鏡が掛けてあります。', zh: '挂着镜子。' }] },
    { id: 'L30-W25', category: 'Nouns', kanji: '花瓶', kana: 'かびん', romaji: 'kabin', meaning: '花瓶', sentences: [{ ja: '花瓶に花が入れてあります。', zh: '花瓶里插着花。' }] },
    { id: 'L30-W26', category: 'Nouns', kanji: '真ん中', kana: 'まんなか', romaji: 'mannaka', meaning: '正中间', sentences: [{ ja: 'テーブルの真ん中に置いてあります。', zh: '放在桌子正中间。' }] },
    { id: 'L30-W27', category: 'Verbs', grammarType: 'Group II', kanji: '植えます', kana: 'うえます', romaji: 'uemasu', meaning: '种植', conjugations: { dictionary: '植える', masu: '植えます', te: '植えて', nai: '植えない', ta: '植えた' }, sentences: [{ ja: '庭に木を植えます。', zh: '在院子里种树。' }] },
    { id: 'L30-W28', category: 'Nouns', kanji: '交番', kana: 'こうばん', romaji: 'kouban', meaning: '派出所', sentences: [{ ja: '交番に町の地図が貼ってあります。', zh: '派出所贴着城市地图。' }] },
    { id: 'L30-W29', category: 'Nouns', kanji: '地図', kana: 'ちず', romaji: 'chizu', meaning: '地图', sentences: [{ ja: '町の地図が貼ってあります。', zh: '贴着城市地图。' }] },
    { id: 'L30-W30', category: 'Nouns', kanji: 'インターネット', kana: 'インターネット', romaji: 'intaanetto', meaning: '互联网', sentences: [{ ja: 'インターネットでいろいろ調べておきます。', zh: '先在网上查好各种信息。' }] }
  ]
};
