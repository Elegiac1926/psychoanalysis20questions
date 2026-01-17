const questions = [
  {
    id: 1,
    question: "当你独自在镜子前停留超过必要的时间，你在看什么？",
    subtitle: "镜像阶段的残余",
    options: [
      { text: "我在寻找'别人眼中的我'——调整表情、角度", score: { hysteric: 3, alienated_image: 2, other_gaze: 2 } },
      { text: "我在检查'瑕疵'——哪里不对称、不完美", score: { obsessional: 4, fragmented_body: 2, anal_precision: 1 } },
      { text: "我在欣赏自己，享受这个画面", score: { narcissistic_libido: 3, phallic_jouissance: 2, imaginary_wholeness: 1 } },
      { text: "我会避开镜子，或者盯着镜子时感到陌生", score: { psychotic_edge: 2, failed_identification: 2, real_intrusion: 1 } }
    ]
  },
  {
    id: 2,
    question: "你是否曾在说出一句话后，立刻意识到'我不该说这个'——但已经说出口了？",
    subtitle: "口误的真相",
    options: [
      { text: "经常，而且说出的往往是我真正想说但不敢说的", score: { hysteric: 3, return_of_repressed: 3, speech_betrayal: 1 } },
      { text: "很少，因为我会提前在脑中预演每一句话", score: { obsessional: 4, preemptive_censorship: 3, symbolic_rigidity: 1 } },
      { text: "有时会，但我能立刻圆回来，不会尴尬", score: { perverse: 2, mastery_of_signifier: 2 } },
      { text: "我常常说完才'听见'自己说了什么", score: { split_enunciation: 2, subject_of_statement: 1 } }
    ]
  },
  {
    id: 3,
    question: "在你的性幻想里，'你'是主动的施动者，还是被动的承受者？",
    subtitle: "欲望的语法",
    options: [
      { text: "我是被欲望的对象——被看、被要、被征服", score: { hysteric: 4, passive_position: 3, object_a: 2 } },
      { text: "我是主动的，但场景必须精确——剧本、对白、节奏", score: { obsessional: 4, scripted_desire: 3, control_fantasy: 2 } },
      { text: "角色会切换，或者我同时是施受双方", score: { perverse: 3, reversibility: 2, disavowal: 1 } },
      { text: "我的幻想中没有明确的'我'，或者很抽象", score: { depersonalized_fantasy: 2, lack_of_subject: 1 } }
    ]
  },
  {
    id: 4,
    question: "当你听到自己被录下的声音时，你的第一反应是？",
    subtitle: "声音客体",
    options: [
      { text: "'这真的是我吗？'——感到陌生和羞耻", score: { hysteric: 3, voice_as_foreign: 2, symbolic_alienation: 1 } },
      { text: "立刻分析哪里'不对'——语速、语调、用词", score: { obsessional: 4, dissecting_self: 3, perfectionist_ear: 1 } },
      { text: "我能接受，或者觉得还不错", score: { narcissistic_acceptance: 2, integrated_voice: 1 } },
      { text: "我会尽量避免听到自己的声音", score: { voice_as_real: 2, unbearable_object: 1 } }
    ]
  },
  {
    id: 5,
    question: "你小时候是否有过这样的幻想：'我不是他们的亲生孩子'？",
    subtitle: "家族罗曼史",
    options: [
      { text: "有过，我幻想自己有'真正的'高贵/特殊的父母", score: { hysteric: 3, family_romance: 3, origin_fantasy: 2 } },
      { text: "没有明确幻想，但我常觉得自己'不属于'这个家", score: { obsessional: 2, estrangement: 2, symbolic_exclusion: 1 } },
      { text: "没有，我很确定我的位置", score: { secure_filiation: 1, accepted_origin: 1 } },
      { text: "我不记得了，或者从未想过这个问题", score: { repression: 1, memory_gap: 1 } }
    ]
  },
  {
    id: 6,
    question: "如果让你完成这句话：'如果我真的得到了我想要的东西，那么______'",
    subtitle: "欲望的悖论",
    options: [
      { text: "'我会失去追求的意义'或'它会变得不再有吸引力'", score: { hysteric: 4, desire_of_lack: 4, unsatisfied_structure: 2 } },
      { text: "'我会发现它不够完美，然后寻找下一个目标'", score: { obsessional: 4, impossible_satisfaction: 3, perpetual_delay: 2 } },
      { text: "'我会享受它，然后继续前进'", score: { pragmatic_desire: 2, reality_oriented: 1 } },
      { text: "我不知道我'真正想要'什么", score: { desire_opacity: 2, lack_of_lack: 1 } }
    ]
  },
  {
    id: 7,
    question: "在你的记忆中，父亲（或父职功能的人）更多是：",
    subtitle: "父亲隐喻的锚定",
    options: [
      { text: "缺席的、弱的，或者被母亲架空的", score: { hysteric: 3, failed_paternal_function: 3, maternal_dominance: 2 } },
      { text: "强大但遥远的，制定规则但不亲近", score: { obsessional: 4, law_without_love: 3, symbolic_father: 2 } },
      { text: "矛盾的——有时严厉有时放纵，难以预测", score: { perverse: 2, inconsistent_law: 2, paternal_instability: 1 } },
      { text: "几乎不存在，或者我对父亲没有清晰印象", score: { foreclosure_risk: 2, paternal_void: 2 } }
    ]
  },
  {
    id: 8,
    question: "当你生病或受伤时，你对'被照顾'的渴望是？",
    subtitle: "退行的诱惑",
    options: [
      { text: "我渴望被照顾，甚至会夸大症状以获得关注", score: { hysteric: 4, secondary_gain: 3, infantile_demand: 2 } },
      { text: "我会隐藏痛苦，尽量不麻烦别人", score: { obsessional: 3, denial_of_need: 3, autonomy_defense: 2 } },
      { text: "我能接受适度的照顾，不会过度依赖", score: { mature_dependence: 2, regulated_need: 1 } },
      { text: "我对'被照顾'感到不适，宁愿独自承受", score: { counterdependent: 2, touch_phobia: 1 } }
    ]
  },
  {
    id: 9,
    question: "你是否有过这样的经历：在亲密关系中，你故意'测试'对方——看ta会不会离开你？",
    subtitle: "重复性强迫",
    options: [
      { text: "有，我需要反复确认ta是否真的爱我", score: { hysteric: 4, testing_love: 4, abandonment_scenario: 3 } },
      { text: "有，但我事后会为这种行为自责和分析", score: { obsessional: 3, guilt_over_impulse: 2, meta_awareness: 1 } },
      { text: "没有，我不会故意破坏关系", score: { secure_attachment: 2 } },
      { text: "我会测试，但更多是出于'看看ta的底线'的好奇", score: { perverse: 3, sadistic_experiment: 2 } }
    ]
  },
  {
    id: 10,
    question: "在做重要决定前，你脑中的'声音'是什么样的？",
    subtitle: "超我的形态",
    options: [
      { text: "'别人会怎么看？''ta会失望吗？'", score: { hysteric: 3, external_superego: 3, gaze_anxiety: 2 } },
      { text: "'这符合逻辑吗？''所有可能性都考虑了吗？'", score: { obsessional: 5, intellectual_superego: 4, doubt_mechanism: 3 } },
      { text: "'我想要就去做'——声音很清晰", score: { perverse: 2, autonomous_will: 1 } },
      { text: "混乱的、矛盾的多个声音同时出现", score: { fragmented_superego: 2, ego_splitting: 1 } }
    ]
  },
  {
    id: 11,
    question: "你小时候对'性'的最初理解（不论正确与否）更接近？",
    subtitle: "原始场景理论",
    options: [
      { text: "一种暴力或侵犯——父母做的'奇怪的事'", score: { hysteric: 3, primal_scene_trauma: 3, sexual_as_violence: 2 } },
      { text: "一种机械过程——我会想象技术细节", score: { obsessional: 4, desexualized_sex: 3, intellectual_defense: 2 } },
      { text: "一种禁忌秘密——大人的'不可说'", score: { perverse: 2, transgressive_allure: 2 } },
      { text: "我不记得，或者很晚才知道'性'", score: { repression: 2, late_awakening: 1 } }
    ]
  },
  {
    id: 12,
    question: "当你看到一对恩爱的情侣，你的第一反应是？",
    subtitle: "认同的位置",
    options: [
      { text: "'我想成为被爱的那个'——我羡慕被渴望", score: { hysteric: 4, identification_with_loved: 3, passive_ideal: 2 } },
      { text: "'他们真的快乐吗？'——我会质疑真实性", score: { obsessional: 3, cynical_analysis: 2, doubt_of_appearance: 2 } },
      { text: "'这很美好'——我为他们感到高兴", score: { secure_empathy: 2 } },
      { text: "轻微的厌恶或不适", score: { envy_turned_contempt: 2, defensive_devaluation: 1 } }
    ]
  },
  {
    id: 13,
    question: "你在购物时，更容易被什么驱动？",
    subtitle: "消费与欲望",
    options: [
      { text: "'穿上它/拥有它，我会成为更好的我'", score: { hysteric: 3, commodity_as_ideal: 2, imaginary_completion: 2 } },
      { text: "'这个性价比最高''这是最优选择'", score: { obsessional: 4, rationalized_desire: 3, consumption_as_calculation: 2 } },
      { text: "'我就是想要'——冲动购买后不后悔", score: { perverse: 2, immediate_satisfaction: 1 } },
      { text: "我很少购物，或者购物让我焦虑", score: { inhibition: 2, ascetic_defense: 1 } }
    ]
  },
  {
    id: 14,
    question: "如果让你描述'高潮'（性或非性的巅峰体验），你会说它是？",
    subtitle: "jouissance的结构",
    options: [
      { text: "一种'消失'——自我边界的短暂瓦解", score: { hysteric: 3, ego_dissolution: 2, mystical_jouissance: 1 } },
      { text: "我很难达到'真正的'高潮，总觉得差一点", score: { obsessional: 4, impossible_jouissance: 4, perpetual_dissatisfaction: 3 } },
      { text: "一种强烈的'确认'——我活着，我存在", score: { narcissistic_jouissance: 2, phallic_triumph: 1 } },
      { text: "我不确定我体验过'真正的'高潮", score: { anhedonia: 2, affective_flatness: 1 } }
    ]
  },
  {
    id: 15,
    question: "在你的幻想中，'理想的爱人'最重要的特质是？",
    subtitle: "对象选择的逻辑",
    options: [
      { text: "神秘、难以捉摸、有'深度'", score: { hysteric: 4, enigmatic_object: 4, desire_for_lack: 3 } },
      { text: "可靠、稳定、价值观契合", score: { obsessional: 3, domesticated_object: 2, anxiety_reduction: 1 } },
      { text: "强大、有魅力、能'征服'我", score: { perverse: 2, phallic_object: 2 } },
      { text: "我没有清晰的'理想类型'", score: { polymorphous_desire: 1 } }
    ]
  },
  {
    id: 16,
    question: "你是否曾在某个瞬间觉得：'我正在重复我父母的模式'——即使你发誓不会？",
    subtitle: "代际传递",
    options: [
      { text: "是的，这让我恐慌——我变成了我最不想成为的人", score: { hysteric: 3, identification_horror: 3, repetition_compulsion: 3 } },
      { text: "是的，我会理性分析为什么会这样，试图纠正", score: { obsessional: 4, intellectual_resistance: 3, control_attempt: 2 } },
      { text: "没有，我走了完全不同的路", score: { reactive_difference: 2, denial_of_similarity: 1 } },
      { text: "我意识到了，但我接受这是我的一部分", score: { integration: 2, mature_acceptance: 1 } }
    ]
  },
  {
    id: 17,
    question: "当你独自大笑（看剧、刷手机等），你是否会'表演'这个笑——好像有人在看？",
    subtitle: "内化的他者",
    options: [
      { text: "是的，我会调整我的笑声，让它'更好看'", score: { hysteric: 4, performative_affect: 4, internalized_gaze: 3 } },
      { text: "我很少独自大笑，笑声需要观众", score: { social_affect: 2, performance_dependency: 1 } },
      { text: "不会，独处时我完全放松", score: { authentic_solitude: 2 } },
      { text: "我分不清什么是'真的'笑，什么是'表演'", score: { affective_confusion: 2, false_self_dominance: 1 } }
    ]
  },
  {
    id: 18,
    question: "你是否有某个'禁忌念头'——你知道它在那里，但绝不敢细想？",
    subtitle: "压抑的核心",
    options: [
      { text: "关于性或身体的——'肮脏'的欲望", score: { hysteric: 3, sexual_repression: 3, body_shame: 2 } },
      { text: "关于攻击性的——'如果我失控会做什么'", score: { obsessional: 5, intrusive_aggression: 4, thought_crime: 3 } },
      { text: "关于存在的——'如果一切都没有意义'", score: { existential_void: 2, nihilistic_thought: 1 } },
      { text: "我没有'禁忌念头'，或者我能坦然面对所有想法", score: { perverse: 2, transparency_claim: 1, repression_denial: 1 } }
    ]
  },
  {
    id: 19,
    question: "在矛盾或冲突中，你的身体最先反应的部位是？",
    subtitle: "症状的定位",
    options: [
      { text: "喉咙（哽咽、失声）或胸口（呼吸困难）", score: { hysteric: 4, conversion_symptom: 3, somatic_expression: 2 } },
      { text: "头（头痛）或胃（绞痛、恶心）", score: { obsessional: 4, psychosomatic_control: 3, internalized_tension: 2 } },
      { text: "我能感知但不会有明显身体反应", score: { somatization_low: 1 } },
      { text: "我不太能感知身体的反应", score: { alexithymia: 2, body_disconnection: 1 } }
    ]
  },
  {
    id: 20,
    question: "如果此刻有一个'读心术师'能看穿你的所有想法，你的第一感受是？",
    subtitle: "透明性恐惧",
    options: [
      { text: "羞耻和恐慌——我有太多不可示人的", score: { hysteric: 3, secret_laden: 3, exposure_horror: 3 } },
      { text: "被侵犯——我的思想是我最后的堡垒", score: { obsessional: 5, autonomy_defense: 4, privacy_sacred: 3 } },
      { text: "好奇——ta会看到什么？我会被理解吗？", score: { desire_for_recognition: 2, exhibitionistic: 1 } },
      { text: "无所谓或解脱——终于有人能懂我了", score: { transparency_fantasy: 2, narcissistic_display: 1 } }
    ]
  }
];

// 验证码配置
const ACCESS_CODE = "psytest2026001";