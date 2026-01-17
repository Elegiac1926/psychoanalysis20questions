// 结果原型定义 - 基于拉康/弗洛伊德主体结构
const resultArchetypes = {
  "癔症主体：永恒的提问者": {
    keywords: ['hysteric', 'desire_of_lack', 'unsatisfied_structure', 'enigmatic_object', 'testing_love', 'passive_position'],
    minScore: 20,
    description: {
      core: "你的欲望是一个问题，而非答案。",
      identity: "你活在'我是谁？''我想要什么？'的永恒追问中。你的欲望不指向对象本身，而是指向对象背后的'缺失'——你爱的不是那个人，而是ta身上你无法企及的部分。你像一个侦探，永远在破译他者的欲望，试图从中找到自己的位置。",
      structure: "这是癔症主体的根本结构：不满足的欲望（le désir insatisfait）。你害怕被完全满足，因为那意味着欲望的死亡。你会无意识地选择那些'不可能'的对象——已婚的人、冷漠的人、或者根本不存在的理想。一旦对方真的靠近，你就会后退。",
      root: "这种结构可能源于早期与母亲的关系——你曾经是母亲欲望的对象，但你发现她的欲望指向别处（父亲、工作、或其他）。于是你学会了：**成为被欲望者，而非欲望的主体**。你的身份建立在'我能否引起ta的欲望'之上。",
      gift: "但这也赋予了你独特的敏感：你能读懂房间里最微妙的情绪流动，你的共情近乎通灵。你是天生的艺术家、演员、治疗师——因为你太懂得'表演'以及'表演背后的空洞'。",
      invitation: "也许可以尝试：停止追问'ta想要我什么'，开始问'我想要什么'。即使答案是空白，那也是你的空白。"
    }
  },

  "强迫症主体：永恒的延宕者": {
    keywords: ['obsessional', 'impossible_jouissance', 'doubt_mechanism', 'intellectual_superego', 'scripted_desire', 'preemptive_censorship'],
    minScore: 22,
    description: {
      core: "你的人生是一场永不完成的草稿。",
      identity: "你活在思想的迷宫里。每一个决定都需要经过无数次推演，每一个欲望都被理性解剖到失去血肉。你不是不想要，而是在'想要'和'真正得到'之间设置了无数关卡——当你终于到达终点，你已经不再想要。",
      structure: "这是强迫症主体的结构：不可能的欲望（le désir impossible）。你通过'延宕'来维系欲望——只要不实现，欲望就不会暴露其虚无。你的超我是一个苛刻的审计师，逼迫你对每一个念头负责。但你的反抗隐秘而固执：'我服从，但我不享受。'",
      root: "这可能源于与父亲法则的关系——你内化了一个过于强大的象征律，但同时保留了一个'不可触及的内核'。小时候，你可能学会了：“活着就是危险的”（你的存在、欲望、攻击性都可能'杀死'某个重要他者）。于是你把自己变成了一具行尸走肉，用理性包裹生命力。",
      gift: "但这也让你成为了最可靠的人：你的承诺重于泰山，你的思考深邃细腻，你能看到别人看不到的漏洞和可能。你是工程师、哲学家、编辑——任何需要'精确'的领域。",
      invitation: "也许可以尝试：允许自己'做得不够好'。试着在没有计划的情况下行动，看看世界会不会崩塌。答案是：不会。"
    }
  },

  "倒错主体：规则的例外": {
    keywords: ['perverse', 'disavowal', 'transgressive_fantasy', 'sadistic_experiment', 'phallic_object', 'mastery_of_signifier'],
    minScore: 14,
    description: {
      core: "你知道规则，但你不受规则约束。",
      identity: "你活在一种奇特的确定性中——当别人都在怀疑、焦虑、追问时，你已经知道了答案。你的欲望清晰、直接、不需要他者的认证。你不是反抗规则，而是站在规则之外，像一个旁观者。",
      structure: "这是倒错结构的核心：否认（le déni）。你知道'那个东西'（阉割、缺失、不完整），但你拒绝接受它。你通过某种'例外'来维持全能感——也许是某个仪式、某个物品、某种权力关系。你是导演，而非演员。",
      root: "这可能与父亲功能的某种扭曲有关——不是缺失，而是不一致。你可能学会了：**规则是可以被操控的**。你成了象征秩序的'破解者'，你懂得如何利用规则的缝隙。",
      gift: "这赋予了你罕见的自由和创造力。你是艺术家、发明家、革命者——所有需要'打破常规'的领域都欢迎你。你不会被社会焦虑束缚，你敢于实验。",
      shadow: "但小心：这种确定性可能建立在对他者痛苦的无感上。倒错不是道德问题，而是结构问题——你可能无意识地需要他者的'缺失'来确认自己的'完整'。",
      invitation: "也许可以问问自己：当我在'确定'时，我在逃避什么不确定？"
    }
  },

  "边缘位置：象征的裂痕": {
    keywords: ['psychotic_edge', 'foreclosure_risk', 'failed_identification', 'real_intrusion', 'fragmented_superego', 'self_other_blur'],
    minScore: 12,
    description: {
      core: "你站在意义的边缘，窥见了它的虚构性。",
      identity: "你常常感到'世界的不真实'——不是抑郁的灰暗，而是一种超现实的陌生感。镜子里的脸、自己的声音、甚至'我'这个词，都像是随时会瓦解的幻象。你比大多数人更接近'实在界'（the Real）——那个没有意义的、原始的维度。",
      structure: "这不是精神病，而是接近精神病结构的边缘位置。你可能经历过某种'父亲隐喻的失败'——不是弑父，而是父亲从未真正建立。象征秩序对你来说像一件不合身的衣服，你勉强穿着它，但总感到异物感。",
      root: "这可能源于早期某种根本性的'不被命名'——你的存在没有被象征秩序充分接纳。你是'多余的''不被期待的'，或者你的性别、身份与象征赋予你的位置存在错位。",
      gift: "但这也让你成为了先知、艺术家、神秘主义者。你能看到别人看不到的真相——因为你不完全相信共识现实。你的作品、思想往往超前于时代，因为你不受象征的限制。",
      warning: "这是一个脆弱的位置。在压力、创伤或失去结构（失业、失恋、亲人去世）时，你可能会体验到更严重的解体。请照顾好自己，必要时寻求专业支持。",
      invitation: "你不需要'修复'自己。也许可以找到一些锚点——音乐、写作、某个人——帮助你在象征和实在之间保持平衡。"
    }
  },

  "神经症的平衡：在两极之间": {
    keywords: ['hysteric', 'obsessional', 'desire_of_lack', 'doubt_mechanism'],
    minScore: 10,
    requireBoth: ['hysteric', 'obsessional'],
    balanceThreshold: 0.6,
    description: {
      core: "你在提问和控制之间摇摆。",
      identity: "你同时具有癔症和强迫症的特质——有时你是渴望被欲望的谜，有时你是精密计算的机器。这种摆荡本身就是防御：当提问变得太危险，你就躲进思考；当思考让你窒息，你就跃入情感。",
      structure: "这是大多数'正常'神经症的样子——不是纯粹的一种，而是动态的组合。你可能在不同关系、不同情境中展现不同面向。",
      gift: "这种灵活性是优势。你既能共情又能分析，既有激情又有理性。你不会被单一结构困住。",
      invitation: "观察自己的摆荡模式。在什么时候，你更像'提问者'？在什么时候，你变成'控制者'？这个模式本身就是你的答案。"
    }
  },

  "自恋的镜像：完整的幻觉": {
    keywords: ['narcissistic_libido', 'phallic_jouissance', 'imaginary_wholeness', 'narcissistic_acceptance', 'autonomous_will'],
    minScore: 15,
    description: {
      core: "你活在镜像的安全感中，但那是虚构的完整。",
      identity: "你对自己有一种基本的确信——你知道你是谁，你接受镜中的形象，你的欲望清晰可辨。这在表面上看起来很健康，但可能掩盖了一个更深的问题：你太过认同于自己的镜像，以至于失去了真正的主体性。",
      structure: "这是自恋型结构：你没有完全进入象征界的辩证法（我与他者的相互构成），而是停留在想象界的'完美镜像'中。你不需要他者的欲望来确认自己——这既是强大，也是孤独。",
      root: "这可能源于早期的'镜像阶段'过于成功——你被充分地镜映、理想化，以至于形成了一个'坚不可摧的自我'。但代价是：你可能难以真正与他人建立联结，因为他者永远是镜子或观众，而非真正的主体。",
      shadow: "小心：当镜像破裂时（衰老、失败、被拒绝），你可能会体验到毁灭性的崩溃。因为你的整个自我建立在'完整'的幻觉上。",
      invitation: "也许可以尝试：让自己'不完美'地被看见。选择一个安全的人，展示你的裂缝。"
    }
  },

  "抑制的主体：欲望的冻结": {
    keywords: ['inhibition', 'repression', 'denial_of_need', 'ascetic_defense', 'anhedonia', 'affective_flatness'],
    minScore: 12,
    description: {
      core: "你把欲望深深埋葬，以至于忘记了它的存在。",
      identity: "你的生活井然有序，但缺少色彩。你不是痛苦（那至少是一种生命力），而是平淡、麻木、'还可以'。你的欲望不是被压抑，而是被冻结——甚至连压抑都需要力量，而你已经没有了。",
      structure: "这可能是早期的过度适应——你学会了：**欲望是危险的**。也许你的需求曾被严厉惩罚，或者你的家庭不允许'想要'。于是你把自己变成了一个'不需要'的人。",
      gift: "这让你成为了最不麻烦的人——你独立、自律、从不索取。但这不是真正的力量，而是一种放弃。",
      warning: "长期的抑制可能导致抑郁、心身症状或突然的爆发。你的欲望没有消失，只是在等待。",
      invitation: "从最小的'想要'开始。今天你想吃什么？穿什么颜色？即使是这些，也是重新学习欲望的开始。"
    }
  },

  "未分化的主体：在成为之前": {
    keywords: [],
    minScore: 0,
    fallback: true,
    description: {
      core: "你的结构尚未定型，或者你拒绝被定型。",
      identity: "这个测试没有捕捉到你的核心模式——可能因为你正处在转变期，可能因为你的防御太成功，也可能因为你真的是一个'未完成'的主体。",
      invitation: "这不是失败，而是一种开放性。继续观察自己在不同情境中的反应。主体结构不是命运，而是一种倾向——它可以被理解，也可以被改写。"
    }
  }
};

// 生成分析报告（核心算法）
function generateAnalysis(scores) {
    // 1. 计算每个原型的匹配度
    let archetypeMatches = [];
    
    for (let archetype in resultArchetypes) {
        const profile = resultArchetypes[archetype];
        
        // 跳过fallback类型（最后处理）
        if (profile.fallback) continue;
        
        let matchScore = 0;
        let keywordCount = 0;
        
        // 计算该原型关键词的总分
        profile.keywords.forEach(keyword => {
            if (scores[keyword]) {
                matchScore += scores[keyword];
                keywordCount++;
            }
        });
        
        // 检查是否达到最低分数阈值
        if (matchScore >= profile.minScore) {
            // 特殊检查：如果需要同时具备多个维度
            if (profile.requireBoth) {
                let hasAllRequired = profile.requireBoth.every(req => {
                    let reqScore = 0;
                    profile.keywords.forEach(kw => {
                        if (kw.includes(req) && scores[kw]) {
                            reqScore += scores[kw];
                        }
                    });
                    return reqScore > 0;
                });
                
                if (!hasAllRequired) continue;
                
                // 检查平衡度
                if (profile.balanceThreshold) {
                    let scores_by_type = {};
                    profile.requireBoth.forEach(type => {
                        scores_by_type[type] = 0;
                        profile.keywords.forEach(kw => {
                            if (kw.includes(type) && scores[kw]) {
                                scores_by_type[type] += scores[kw];
                            }
                        });
                    });
                    
                    let values = Object.values(scores_by_type);
                    let min = Math.min(...values);
                    let max = Math.max(...values);
                    let balance = min / max;
                    
                    if (balance < profile.balanceThreshold) continue;
                }
            }
            
            archetypeMatches.push({
                name: archetype,
                score: matchScore,
                avgScore: keywordCount > 0 ? matchScore / keywordCount : 0,
                profile: profile
            });
        }
    }
    
    // 2. 按匹配分数排序
    archetypeMatches.sort((a, b) => b.score - a.score);
    
    // 3. 确定主要原型
    let primaryArchetype = archetypeMatches[0];
    
    // 4. 如果没有匹配，使用fallback
    if (!primaryArchetype) {
        primaryArchetype = {
            name: "未分化的主体：在成为之前",
            profile: resultArchetypes["未分化的主体：在成为之前"]
        };
    }
    
    // 5. 生成详细报告
    let title = primaryArchetype.name;
    let content = '';
    let desc = primaryArchetype.profile.description;
    
    // 开场核心
    content += `<p class="opening">${desc.core}</p>`;
    
    // 主要内容
    if (desc.identity) {
        content += `<h3>你的主体位置</h3>`;
        content += `<p>${desc.identity}</p>`;
    }
    
    if (desc.structure) {
        content += `<h3>结构的秘密</h3>`;
        content += `<p>${desc.structure}</p>`;
    }
    
    if (desc.root) {
        content += `<h3>可能的起源</h3>`;
        content += `<p>${desc.root}</p>`;
    }
    
    if (desc.gift) {
        content += `<h3>你的天赋</h3>`;
        content += `<p>${desc.gift}</p>`;
    }
    
    if (desc.shadow) {
        content += `<h3>阴影面</h3>`;
        content += `<p>${desc.shadow}</p>`;
    }
    
    if (desc.warning) {
        content += `<h3>需要留意的</h3>`;
        content += `<p>${desc.warning}</p>`;
    }
    
    if (desc.invitation) {
        content += `<h3>给你的邀请</h3>`;
        content += `<p>${desc.invitation}</p>`;
    }
    
    // 结尾
    content += `<p class="closing">这是拉康/弗洛伊德视角下的一种解读。<br>主体结构不是宿命，而是理解自己的起点。<br><br>"无意识是他者的话语。"<br>——雅克·拉康</p>`;
    
    return { title, content };
}
