import type { PublicLocale } from "@/lib/i18n/config";
import type { BusinessInterview } from "@/lib/interviews";

type InterviewTranslation = {
  contents: string;
  contentsLabel: string;
  imageAlt: string;
  intro: string;
  sections: readonly {
    paragraphs: readonly string[];
    quote: string;
    title: string;
  }[];
  sourceLabel: string;
  speakerName: string;
  speakerRole: string;
  title: string;
};

export type LocalizedBusinessInterview = Omit<
  BusinessInterview,
  keyof InterviewTranslation
> &
  InterviewTranslation;

const en = {
  "asset-protection": {
    contents: "What can employers do?",
    contentsLabel: "What can employers do?",
    imageAlt: "B. Bat-Erdene, Partner and Attorney at Tsets Partners Law Firm",
    intro:
      "Cases in which employees misappropriate, waste, or unlawfully take company funds, goods, and equipment occur relatively frequently in businesses, causing substantial financial losses to employers. We are therefore providing Business.mn readers with legal advice on how companies can protect their assets against such conduct and prevent potential risks. This issue is not limited to missing cash: the loss of items used for business purposes and inventory also causes actual financial harm to a company.",
    sections: [
      {
        paragraphs: [
          "To protect corporate assets, employers do not need to distrust their employees. Instead, the most effective approach is to clearly define responsibilities through contracts and internal regulations, establish dual controls over the movement of assets, and maintain proper documentation. Corporate assets include not only money and goods, but also equipment, fuel, raw materials, software licenses, company bank accounts, and receivables from third parties. The key is to maintain records that make it possible to trace where assets originated, who received them, and who authorized each transaction.",
          "Chapter 17 of the Criminal Code of Mongolia establishes criminal offenses against property rights. Company employees and officials may be implicated in theft (Article 17.1), embezzlement (Article 17.4), negligent handling of another person's property entrusted for safekeeping (Article 17.9), and abuse of authority by a legal entity (Article 22.12). The legal classification depends on whether the assets were entrusted to the employee and the scope of that person's authority.",
          "The following conduct has appeared in criminal cases decided by the courts. These cases show that risk is not confined to cash registers and physical cash; it can also arise in inventory pricing, payroll files, and warehouse records.",
          "• Diverting company revenue into a personal bank account and using it for personal purposes.",
          "• Stealing cash from the company's cash register.",
          "• Registering goods worth MNT 367 million in an electronic system at only MNT 65 million and then purchasing them for personal benefit, causing losses exceeding MNT 300 million. The individuals exploited the difference between the system price and the actual value of the goods.",
          "• Misappropriating cameras, lenses, microphones, drones, VR equipment, Osmo Pocket cameras, and memory devices entrusted to employees for business use, then selling or pawning them, causing losses exceeding MNT 80 million.",
          "• A regional manager took goods ordered by a branch from the company's warehouse over two years and three months but never delivered them, instead pawning or selling them and causing losses exceeding MNT 270 million.",
          "• A chief accountant altered an approved Excel payroll file before sending it to the bank, replacing an employee's name and account number with their own. Over four months, eight transactions transferred a total of MNT 26 million into the accountant's personal account.",
          "• A senior teller carried out eight fictitious deposit transactions totaling MNT 85 million, used the money personally, and misappropriated the organization's assets through their official position.",
          "• A storekeeper colluded with a driver to remove spare parts—including bearings, starters, compressors, air dryers, and shock absorbers—from a mining site, misappropriating assets worth MNT 155,785,373 entrusted to their custody.",
          "Such incidents are often enabled by weak internal controls, incomplete asset records, multiple responsibilities concentrated in one employee, and the absence of clear work procedures. Some employees may not know that their conduct constitutes a criminal offense or what liability they could face. When responsibility, oversight, or documentation is missing, detecting misconduct promptly and establishing the facts afterward becomes much more difficult.",
        ],
        quote: "",
        title:
          "B. Bat-Erdene: Documenting every handover helps prevent substantial losses",
      },
      {
        paragraphs: [
          "Giving one employee full authority to place orders, receive goods, record them, approve payments, and execute transactions increases the likelihood of errors or manipulation for personal gain. This risk is especially high in positions authorized to use, sell, or purchase company assets.",
          "Involve multiple employees who can oversee one another in procurement and sales. In small and medium-sized enterprises, the owner or another employee can regularly monitor transactions. Clearly define in advance who places orders, who receives the goods, and who executes payments.",
        ],
        quote: "",
        title: "Do not concentrate all authority in one person",
      },
      {
        paragraphs: [
          "In civil and criminal disputes, many businesses fail to recover money owed because they cannot prove their legal right to claim the asset. Document every transfer of goods or inventory, every cash payment or receipt, and every asset transfer. Although documenting every step may seem tedious, it prevents substantial losses and provides key evidence for a claim. Verbal agreements are difficult to prove after a dispute, while records created at the time clearly show how and where assets moved.",
          "Making it a habit to compile documentation and enter into contracts promptly will protect you from future risks.",
        ],
        quote:
          "If you approach legal authorities stating, “I have the right to claim this asset,” they will ask, “What evidence do you have to prove it?”",
        title: "Document every handover",
      },
      {
        paragraphs: [
          "Scheduled inspections, unannounced checks, and inventory counts each play a distinct role in monitoring company assets and goods. Combining them helps detect losses early and demonstrates to employees that internal controls are working. Regular checks:",
          "• Reduce the risk of embezzlement and unauthorized use: a high probability of detection deters violations.",
          "• Ensure record accuracy: compare physical inventory against warehouse logs, accounting records, cash balances, and asset registers to correct errors.",
          "• Define clear accountability: track where assets are, who holds them, and document transfers.",
          "• Detect losses early and limit damage: make it easier to identify when, where, and at what stage a discrepancy occurred.",
          "• Provide objective information to management: help executives make informed decisions to correct problem areas.",
        ],
        quote: "",
        title: "Conduct scheduled and unannounced inspections regularly",
      },
      {
        paragraphs: [
          "Under the Labor Law, employers must enter into written agreements with employees and clearly define job responsibilities. For employees authorized to receive, store, transfer, or spend assets, state these duties explicitly in both the job description and employment contract. When those documents match the employee's actual daily work, responsibility is much easier to establish.",
          "Full pecuniary liability agreements should not be imposed on every employee. Article 75 of the Labor Law provides that such agreements apply to employees responsible for spending, transferring, or safeguarding company assets. The agreement must identify the covered assets and the precise scope of rights and duties, and the employer must formally approve the list of positions subject to full financial liability.",
        ],
        quote: "",
        title:
          "Clearly define employee duties and responsibilities in contracts",
      },
      {
        paragraphs: [
          "Explaining the company's goals, desired outcomes, and the reason for achieving them together is more effective than threatening employees with legal consequences. At the same time, employees need to understand what the law requires. Training should explain how assets may be used and when explicit authorization is required.",
          "Article 17.4 of the Criminal Code classifies the misappropriation of entrusted property or property rights as a crime. If an employee is entrusted with money, goods, or equipment through their work and uses it for themselves or others without authorization, that may constitute embezzlement.",
          "Article 22.12 applies to managerial and executive officers of legal entities. An offense is committed if an executive uses authority granted by law, corporate charter, or contract to create an unfair advantage for themselves or another person, causing substantial loss exceeding MNT 10 million.",
          "Examples include awarding a contract to an affiliated company at an excessive above-market price, unjustifiably transferring a company vehicle into personal ownership, or using company funds to grant an illegal advantage to oneself or an acquaintance.",
          "To prevent this, record every management decision in writing. Establish a process for separately declaring contracts involving conflicts of interest or related parties and have them reviewed independently. This allows the circumstances, interests, and approvals behind a decision to be audited later.",
        ],
        quote: "",
        title: "Conduct legal training for employees",
      },
      {
        paragraphs: [
          "If missing inventory, fraudulent documents, or unauthorized transfers are discovered, protect the evidence first. Secure bank statements, invoices, contracts, warehouse records, system logs, and security footage lawfully so they cannot be deleted or altered. If an inventory count is conducted, record the participants, date, and discrepancy calculation, obtain signatures, and request a written explanation from the employee concerned. These steps are essential for establishing the actual loss; damage must not be estimated from assumptions.",
          "Calculate the employer's records, asset depreciation, and actual remaining balances. Arbitrarily deducting money from an employee's salary, blaming them for all loss without evidence, or dismissing them without hearing their explanation may cause a labor dispute. Compensation can be agreed in compliance with the law or resolved by a court when necessary.",
          "If there are reasonable grounds to suspect a criminal offense, submit the evidence to the police. Do not publicly accuse or threaten the employee or pressure them to alter evidence. Such conduct can harm human rights and the company's reputation and obstruct the investigation and asset recovery.",
          "Resolving matters through law enforcement and judicial bodies requires substantial time and money. Prevention is therefore far more effective.",
          "These steps reduce the risk of employers losing assets and employees committing crimes that carry criminal penalties. Both parties save time and money. Making contracts, record-keeping, dual controls, and regular training part of daily practice serves both sides' interests.",
          "This advice provides general legal information. A formal legal opinion should be issued only after reviewing the specific facts and materials of a particular case or dispute.",
        ],
        quote: "",
        title: "What should you do if suspicion arises?",
      },
    ],
    sourceLabel: "View original source",
    speakerName: "B. Bat-Erdene",
    speakerRole: "Partner and Attorney",
    title:
      "Attorney B. Bat-Erdene: Documenting Every Handover Helps Prevent Substantial Losses",
  },
  "company-charter": {
    contents: "Interview questions",
    contentsLabel: "Interview questions",
    imageAlt: "G. Lkhagvasuren, Founder of Tsets Partners Law Firm",
    intro:
      "We spoke with G. Lkhagvasuren, founder of Tsets Partners Law Firm, about ownership disputes between partners, the importance of meticulously drafting company articles of association, and how to proactively protect a business from legal risks.",
    sections: [
      {
        paragraphs: [
          "When individuals collaborate without incorporating a company, they usually enter into a partnership agreement. This contract legally specifies how profits and losses are shared and each party's capital contribution, whether in money, knowledge, or skills. If a dispute arises, it is straightforward to resolve under the agreed terms because the rules are clear.",
          "Establishing a company moves the relationship toward a more classic corporate structure. Under the Company Law of Mongolia, a company's foundational document is its Articles of Association. It should therefore address every issue normally covered in a partnership agreement, including capital contributions, executive management, financial oversight, and other operational rules.",
          "One major mistake is common among founders. People may meticulously detail a partnership agreement, yet take a broad approach when incorporating, assuming that because ownership is 50:50, half of everything belongs to each person. Instead of carefully drafting the Articles at the outset, they rely on a standard template. Most disputes arise over money and finances. As a company becomes more profitable, the person controlling management may create an unfair advantage, take disproportionate dividends, or misappropriate corporate assets. Financial management and control rules must therefore be stated in detail.",
          "When disputes reach court, standard template charters often contain no specific provisions on how profits and losses should be distributed. A company established with MNT 1 million in charter capital may later hold hundreds of millions or billions in assets. A lack of financial understanding about share-based and after-tax profits then creates ambiguity. In practice, profitable companies may present loss-making statements; because dividends can only be distributed from net profit, a managing partner may falsely report losses and divert funds from the business.",
        ],
        quote: "",
        title:
          "Shareholding is one of the biggest sources of disputes among entrepreneurs. Two friends may build a profitable company for one to three years before a shareholding dispute begins. What causes this, and what has been overlooked?",
      },
      {
        paragraphs: [
          "Yes. This relates specifically to the company's Articles of Association. Most small and medium-sized enterprises use off-the-shelf templates. Ready-made services near state registration and stamp-making offices advertise that they will prepare charters and registration documents. The core problem is that companies use these templates without customization.",
        ],
        quote: "",
        title:
          "Can verbal agreements lead to disputes between shareholders, with the business itself ultimately suffering the most? You also mentioned standard templates.",
      },
      {
        paragraphs: [
          "Large corporations always consult lawyers before key decisions or contract negotiations. For SMEs, however, this is closely tied to traditional Mongolian attitudes. Much like the slow development of estate planning and wills, people prefer verbal goodwill. Two people may start a business relying on trust and moral expectations that they will never have problems with each other.",
          "If one partner suggests consulting a lawyer and structuring the contract properly, the other may take offense and ask whether they are being doubted. Risk arises from this casual approach to legal formality. Some people do conduct business for decades without entering a courtroom because they honor their original commitments and remain honest about investment and profit sharing. Today, however, verbal commitments are less reliably honored, and people often seek lawyers only after trust has broken down. Our business culture still falls short in anticipating risk and seeking proactive legal advice.",
          "In Western countries, when two parties agree to collaborate, both sides commonly bring their own attorneys to draft and negotiate the contract. That culture is only beginning to develop in Mongolia, where SME owners are gradually recognizing the value of consulting a lawyer. Its development is vital for long-term business stability.",
        ],
        quote: "",
        title:
          "Is the problem negligence, or do people avoid legal advice because of its cost? Why is the culture of drafting formal charters and contracts still weak?",
      },
      {
        paragraphs: [
          "It is not about distrust; making a contract explicit benefits both parties. Even close friends who start a business together can lose their personal relationship over small financial issues. Clear terms from the outset can at least preserve that relationship.",
          "When a dispute arises, it is much easier to say, “We both agreed to this, so let us follow the contract,” or “Let the court decide.”",
          "Mongolians often conduct business without written contracts, leading to bitter arguments and permanently severed relationships. Partners can draft their own agreement without hiring an expensive lawyer if they anticipate possible risks and put their mutual decisions in writing.",
          "Complex legal jargon is unnecessary. Agreements expressed clearly in plain language can be resolved under the law. Courts interpret contracts from the literal meaning of their wording, so phrasing and grammar matter. At a minimum, parties should develop the habit of anticipating risks and agreeing on them in advance.",
          "Too often, people sign contracts without reading or understanding them. This becomes extremely damaging in a dispute. Read contracts thoroughly, understand them, and consult a lawyer whenever possible. Experienced attorneys have handled many similar cases and can realistically forecast potential risks.",
        ],
        quote:
          "Having a lawyer review a contract is not a sign that you distrust your business partner.",
        title:
          "So having a lawyer review a contract is not a sign of distrust toward a partner, correct?",
      },
      {
        paragraphs: [
          "It is generally very difficult to have such messages admitted as legal evidence. If someone demands payment through Viber and submits screenshots or an inspection record, the court may reject it because the other party can simply say, “I was not the person writing from that account.” Such messages are treated only as informal correspondence. The most reliable method is to put every agreement, transaction, or meeting decision in writing, prepare concise minutes, and confirm them with signatures. Our business community still lacks this written-documentation culture.",
        ],
        quote: "",
        title:
          "Can business arrangements made through Viber or Messenger serve as evidence in court, or are they as uncertain as verbal agreements?",
      },
      {
        paragraphs: [
          "In most contracts, one party has a stronger bargaining position. As borrowers or insurance applicants may have to accept standard terms, similar dynamics occur in investment deals. Investors seek high returns while minimizing risk and often introduce strict terms to prevent founders from using capital inefficiently.",
          "Investment generally takes two main forms:",
          "• Equity transfer: the founder transfers a percentage of company shares to the investor in exchange for funding. The investor becomes a shareholder and participates directly in corporate decisions. This is standard international practice.",
          "• Debt or yield financing: the investor does not become a shareholder or participate in internal operations but receives the principal back after a set period together with an agreed return, such as 20 percent.",
          "Commercial and civil relationships follow the principle of freedom of contract, so the parties set their own terms. Lawyers should therefore be involved in drafting investment agreements and updating the Articles of Association. They can tailor provisions to protect both parties, define responsibilities, and reduce the risk of future litigation.",
        ],
        quote: "",
        title:
          "When startups and SMEs receive investment, founders risk losing authority or facing excessive control. Which agreements and clauses should they focus on to protect their interests?",
      },
      {
        paragraphs: [
          "A tenant has two primary interests: stability of location and stability of price. Both can be governed directly by contract and are protected by law. Yet landlords may include clauses allowing rent increases when inflation or the Consumer Price Index rises above a threshold. Monthly rent of MNT 5 million may then rise to MNT 7 million, with the tenant asked to vacate if they refuse. In such a dispute, the tenant can go to court to enforce the right to continue the lease for the originally agreed term and price.",
        ],
        quote: "",
        title:
          "Office and commercial lease disputes are common, including early termination, sudden rent increases, and unexpected fees. How common are these disputes, and how does the law regulate them?",
      },
      {
        paragraphs: [
          "Yes. Since Mongolia adopted its democratic Constitution, legislation has continually evolved. Laws are refined through court practice and scholarly analysis to address real-world disputes. As legislation develops, citizens and entrepreneurs have more ways to protect their interests, and lawyers are the professionals who use those mechanisms.",
          "By retaining a dedicated lawyer or advisory law firm, an entrepreneur can prevent risk proactively. When lawyers participate in negotiations from the start, they include provisions that guard against future disputes. If a problem has already arisen, they help find lawful ways to defend the client's interests against demands that breach the contract or the law. Mongolian legislation provides citizens and organizations with meaningful mechanisms to protect their rights.",
        ],
        quote: "",
        title:
          "Overall, do clear written rules and operational boundaries prevent many risks when doing business in Mongolia?",
      },
    ],
    sourceLabel: "View original source",
    speakerName: "G. Lkhagvasuren",
    speakerRole: "Founder and Attorney",
    title:
      "Attorney G. Lkhagvasuren: Company Articles of Association Are the Greatest Guarantee for Protecting a Business Against Risk",
  },
  "insurance-risk": {
    contents: "Interview questions",
    contentsLabel: "Interview questions",
    imageAlt: "G. Lkhagvasuren, Founder of Tsets Partners Law Firm",
    intro:
      "When starting a business, entrepreneurs focus heavily on offices, equipment, products, employees, and sales. Yet they rarely consider how to protect the business if unexpected risks strike these assets and operations and cause severe financial distress. Do entrepreneurs really need insurance, and how can it help them navigate financial risk? We spoke with G. Lkhagvasuren, founder of Tsets Partners Law Firm and an attorney specializing in insurance law who has researched court decisions, published open reports, and advocated for the public interest before relevant authorities.",
    sections: [
      {
        paragraphs: [
          "Put simply, insurance is a mechanism for mitigating and transferring financial loss arising from specific future risks. For an entrepreneur, this is especially important. Imagine investing MNT 500 million to establish a shop, factory, restaurant, or service company. That business was not created overnight; it represents years of labor, capital, loans, employee salaries, inventory, and customer trust.",
          "Sudden events such as fire, flooding, equipment failure, damaged inventory, or liability to others can occur. Insurance does not guarantee that risk will never arise. It creates a financial buffer when risk materializes. Instead of bearing every risk alone with their own assets, an entrepreneur transfers part of that burden to the insurance system.",
        ],
        quote: "",
        title:
          "What is the most fundamental understanding an entrepreneur should have about insurance?",
      },
      {
        paragraphs: [
          "Although Mongolia's insurance sector dates to 1934, the commercial insurance framework began developing with the transition to a market economy in the 1990s. The revised Law on Insurance adopted in 2004 clarified the legal foundation. In terms of public and business awareness and insurance culture, however, we are still at an early stage.",
          "Entrepreneurs often view insurance merely as a bank requirement for a loan or a mandatory condition for entering a tender. In reality, insurance is far broader and more beneficial.",
        ],
        quote: "",
        title: "How long has Mongolia's insurance system been developing?",
      },
      {
        paragraphs: [
          "It depends on the nature of the business. At a minimum, entrepreneurs must identify the core risks connected with their assets and operations.",
          "First, property insurance is vital if the business owns real estate, structures, equipment, or inventory. If a store carrying MNT 300 million in goods suffers a fire, an uninsured owner must replace everything out of pocket. If properly insured, the business can receive compensation under the contract and fund the restoration of operations.",
          "Second, liability insurance is equally important. Business operations may harm not only the company's own assets but also third-party property, customers, or other parties' rights.",
          "If a business in a shopping center damages a neighboring tenant's goods, the question is who bears that loss. Liability insurance can cover such risks. Entrepreneurs should therefore ask not only whether their assets are insured but also what happens if their operations harm someone else.",
        ],
        quote: "",
        title: "What insurance should an SME owner obtain at a minimum?",
      },
      {
        paragraphs: [
          "I believe insurance can protect businesses very effectively. Major fires in Mongolia illustrate this clearly.",
          "In 2019, a fire at the Chinggis branch of the Emart shopping center halted operations and caused losses assessed in the billions of tugriks. When a domestic insurer cannot absorb a major risk alone, it reinsures with international companies. In this case, the local insurer and reinsurers covered the loss.",
          "A major fire also struck the State Department Store on June 7, 2020. The building was insured as real estate, while tenants insured their inventory under their leases, according to State Department Store JSC. A substantial amount of compensation was settled.",
          "This shows that when severe losses occur, the financial safety net formed by the business's own capital, insurance, and reinsurance is essential to rebuilding and resuming operations.",
          "The value of insurance may be hard to see when no accident occurs; it is felt most strongly when risk becomes real.",
        ],
        quote: "",
        title: "How effectively can insurance protect a business in practice?",
      },
      {
        paragraphs: [
          "This is one of the insurance industry's most important issues. Alongside building public and business awareness, insurers must establish fair, clear, and prompt claim-settlement systems.",
          "A policyholder may pay premiums for years and seek compensation only when a real risk occurs. If a major loss is met with an overly narrow interpretation of the contract, a reduced valuation, or an outright denial, the client suffers not only the financial loss but also a complete loss of trust in insurance. The belief that insurance is useless then spreads through society. One person's negative experience shapes the attitudes of many potential policyholders.",
        ],
        quote: "",
        title:
          "There is criticism that insured parties often cannot receive full compensation. What are your thoughts?",
      },
      {
        paragraphs: [
          "The long-term success of an insurance business is not measured only by the premiums it collects. It should be measured by how fairly, clearly, and promptly it fulfills its obligations when risk occurs. Insurers cannot cover risks excluded from the contract, and a policyholder's breach may carry legal and contractual consequences.",
          "One principle is crucial: the clearer the contract terms, the more real the protection, and the fairer the claims mechanism, the stronger the insurance culture becomes. The industry must not only protect today's policyholders but also prepare tomorrow's.",
          "As more people receive fair compensation and successfully restore their businesses, the understanding that insurance is necessary will grow naturally.",
        ],
        quote: "",
        title: "What should insurers focus on in their claims policies?",
      },
      {
        paragraphs: [
          "Anyone starting a business should first ask, “What risks could I face?” From there, financial risk can be managed through insurance.",
          "Never sign a contract blindly. Read it, understand which terms are favorable or unfavorable, and negotiate. In an insurance contract, clarify which risks are covered and excluded, the amount and valuation method, when compensation may be denied, and which documents must be submitted within what period after a loss.",
          "Insurance does not guarantee that risk will never occur. It is a financial safeguard that preserves the ability to rebuild when it does. Instead of asking, “Do I need insurance?” entrepreneurs should ask, “What risks exist in my business, and how can I manage them properly?”",
        ],
        quote:
          "Business success is not only about earning profit. The ability to protect the assets and business you have built against risk is also part of success.",
        title: "What final advice would you give entrepreneurs?",
      },
    ],
    sourceLabel: "View original source",
    speakerName: "G. Lkhagvasuren",
    speakerRole: "Founder and Attorney",
    title:
      "Attorney G. Lkhagvasuren: Managing Financial Risks Through Insurance",
  },
} satisfies Record<BusinessInterview["slug"], InterviewTranslation>;

const zh = {
  "asset-protection": {
    contents: "雇主可以采取哪些措施？",
    contentsLabel: "雇主可以采取哪些措施？",
    imageAlt: "Tsets Partners律师事务所合伙人、律师B.巴特额尔登",
    intro:
      "在企业经营中，员工侵占、损毁或非法占用公司资金、货物及设备的现象屡见不鲜，给雇主带来了巨大的经济损失。为此，我们为Business.mn的读者提供以下法律建议，探讨如何保护公司资产并规避相关风险。这一问题不仅限于资金短缺：用于工作的设备或库存产品的流失，同样会给公司造成实质性的损失。",
    sections: [
      {
        paragraphs: [
          "保护公司资产并不意味着要怀疑员工。相反，最有效的方法是通过合同和制度明确责任分工，对资产流动实施双重监控并留存凭证。所谓资产，除了资金和货物外，还包括设备、燃料、原材料、软件许可证、公司账户以及应收账款等。核心在于记录资产流动的每一步，使其始于何处、流向何人以及由谁批准均可追溯查证。",
          "《蒙古国刑法典》第十七章对侵犯所有权犯罪作出了规定。公司员工或官员涉及偷窃（第17.1条）、侵占财产（第17.4条）、玩忽职守致使他人财产受损（第17.9条）以及滥用法人职权（第22.12条）等犯罪屡见不鲜。罪名认定取决于财产是否委任给该员工，以及该员工拥有何种职权。",
          "刑事法院审理的案件中曾出现以下行为。由此可见，风险不仅存在于出纳和现金管理环节，同样存在于货物定价、工资明细表和仓库登记册中。",
          "• 将公司收入转入个人账户并据为己有。",
          "• 从公司出纳处盗窃现金。",
          "• 将价值3.67亿图格里克的货物在电子系统中仅登记为6500万图格里克后自行购买，给公司造成超过3亿图格里克的损失，即利用系统登记价格与实际价值之间的差价。",
          "• 将交由其因公使用的摄像机、镜头、麦克风、无人机、VR设备、Osmo Pocket相机和存储设备侵占并出售或典当，造成8000多万图格里克的损失。",
          "• 一名负责地方业务的经理在2年3个月内从公司仓库提取分公司订购的货物，却未送达而是据为己有，并通过典当或转售给公司造成2.7亿多图格里克的损失。",
          "• 一名总会计师在向银行发送经批准的工资明细表Excel文件时，将员工姓名和账号替换为自己的姓名和账号，在4个月内分8次将总计2600万图格里克转入个人账户。",
          "• 一名高级柜员利用职务便利，先后8次进行虚假入账，共计8500万图格里克并用于个人消费，侵占了机构财产。",
          "• 一名保管员与司机串通，将轴承、起动机、空压机、空气干燥器、减震器等零部件运出矿区，侵占了委任其保管的价值155,785,373图格里克的资产。",
          "此类案件往往源于内部监督薄弱、资产登记不全、多项职权集中于单一员工，以及工作流程缺乏明确规范。有些员工甚至不知道自己的行为已构成犯罪。如果职责、监督、凭证三者缺失其一，及时发现违规行为及事后查清事实都会变得极其困难。",
        ],
        quote: "",
        title: "B.巴特额尔登：对每一次交接进行书面记录，可防止重大损失",
      },
      {
        paragraphs: [
          "如果给予单一员工下订单、接收货物、登记入账、审批付款和执行交易的所有权力，出错或其利用职务便利谋取私利的风险就会大幅增加。在涉及使用、出售或购买公司资产的岗位上，这种风险尤为突出。",
          "因此，在采购和销售环节应安排多名员工互相监督。对于中小企业，公司所有者或其他员工可以定期复核交易，并事先明确由谁订货、由谁收货以及由谁转账付款。",
        ],
        quote: "",
        title: "切勿将所有权力集中于一人",
      },
      {
        paragraphs: [
          "在刑事和民事纠纷中，许多企业因无法证明自己主张资产的法律权利，导致无法追回应得款项。因此，在交接货物材料、收付现金或向他人转移资产时，务必制作书面凭证。记录每一步骤看似繁琐，但它是防止重大损失和证明诉求的核心证据。争议发生后，口头约定很难还原和证明，而当时制作的凭证能清晰显示资产流转路径。",
          "养成随时收集凭证、及时签订合同的习惯，能有效规避未来风险。",
        ],
        quote:
          "如果您向司法机关主张“我有权索回这项财产”，他们会询问：“您有什么证据可以证明？”",
        title: "对每一次交接进行书面凭证化",
      },
      {
        paragraphs: [
          "计划性检查、突击检查和资产盘点各自发挥不同作用。将三者结合，有助于早期发现损失，并向员工表明内部监控机制正在有效运转。定期登记和检查能够：",
          "• 降低侵占和未经授权使用的风险：被发现的高概率能有效遏制违规行为。",
          "• 确保账实相符：将盘点结果与仓库台账、会计账目、现金及资产登记进行核对，及时纠正错误。",
          "• 明确责任归属：明确资产的位置和保管人，并对转移过程留痕。",
          "• 及早发现损失并控制损害范围：便于查明差错发生的时间、地点及环节。",
          "• 为管理层提供真实信息：帮助决策者精准修复存在漏洞的环节。",
        ],
        quote: "",
        title: "定期进行计划性检查、突击检查和盘点",
      },
      {
        paragraphs: [
          "根据《劳动法》，雇主必须与员工签订书面劳动合同并明确岗位职责。对于有权接收、保管、转移或支配资产的员工，应在岗位说明书和合同中清晰列明这些职责。当合同与岗位说明书的内容与实际工作相符时，责任归属就更容易界定。",
          "不应将全额财产责任合同概括性地强加给所有员工。《劳动法》第七十五条规定，此类合同适用于承担支配、转移或保管公司财产职责的员工。合同中应明确资产范围和权利义务边界；全额责任岗位清单也应由雇主正式批准。",
        ],
        quote: "",
        title: "在合同中明确员工的职责与法律责任",
      },
      {
        paragraphs: [
          "向员工解释公司的目标、预期成果以及共同实现这些目标的意义，比单纯用法律责任恐吓更为有效。同时，也要让他们理解法律规定。培训应明确员工可以如何使用资产，以及何时必须获得批准。",
          "《刑法典》第17.4条规定，侵占受委托保管的他人财产或财产权利构成犯罪。例如，员工在工作中被委任保管资金、货物或设备，若未经授权将其用于个人或他人，即可能构成侵占。",
          "《刑法典》第22.12条适用于法人单位的管理层和执行人员。若管理者利用法律、章程或合同赋予的职权为自己或他人谋取优势，并造成1000万图格里克以上重大损失，即构成该罪。",
          "例如，总经理以远高于市场价的价格将合同签给关联公司、无正当理由将公司车辆过户至个人名下，或利用公司资金为本人或熟人提供非法利益。",
          "为防止此类情况，所有管理决策均应留存书面记录。建立对利益冲突合同及关联方交易单独申报并由独立第三方复核的制度，以便日后审查决策背景、利益关联及批准程序。",
        ],
        quote: "",
        title: "对员工开展法律知识培训",
      },
      {
        paragraphs: [
          "如果发现货物短缺、虚假凭证或未经授权的转账，首先应保护证据。依法妥善保存银行流水、发票、合同、仓库台账、系统日志和监控录像，防止删除或篡改。若进行了盘点，应记录参与人员、日期及差错计算结果并签字确认，同时要求相关员工提供书面说明。损失金额绝不能基于主观推测。",
          "应结合账目登记、资产折旧和实际结存进行计算。擅自扣减员工工资、无证据地将所有损失归咎于员工，或未听取解释就直接解雇，都可能引发劳动争议。赔偿问题可依法协商，必要时通过法院解决。",
          "如果存在涉嫌犯罪的正当依据，应附上证据向警方报案。切勿公开指责、威胁员工或施压要求其篡改证据。这不仅损害人权和公司声誉，也可能阻碍调查及损失追讨。",
          "通过法律和司法机关解决问题需要耗费大量时间与金钱，因此预防远比事后补救更为有效。",
          "实施上述步骤，可以降低雇主损失资产以及员工违法犯罪面临刑罚的风险，双方都能节省时间与资金。将合同管理、账目登记、双重监督和定期培训贯穿日常工作，符合劳资双方共同利益。",
          "本建议仅提供一般性法律信息。具体法律意见需在审查特定案件或争议的事实材料后方可作出。",
        ],
        quote: "",
        title: "发现可疑情况时该如何处理？",
      },
    ],
    sourceLabel: "查看原文",
    speakerName: "B.巴特额尔登",
    speakerRole: "合伙人、律师",
    title: "律师B.巴特额尔登：对每一次交接进行书面记录，可防止重大损失",
  },
  "company-charter": {
    contents: "专访问题",
    contentsLabel: "专访问题",
    imageAlt: "Tsets Partners律师事务所创始人G.勒哈格瓦苏伦",
    intro:
      "就合伙人之间发生的股权纠纷、精心制定公司章程的重要性，以及如何预防企业法律风险等问题，我们采访了Tsets Partners律师事务所创始人G.勒哈格瓦苏伦。",
    sections: [
      {
        paragraphs: [
          "如果不成立公司而选择合作，人们通常会签署合作协议。该协议会在法律层面明确规定利润和亏损如何分配、各自以何种比例出资，包括资金、知识或技能。因此，一旦发生纠纷，按照合同规定解决相对容易，规则也非常清晰。",
          "成立公司则是走向更经典的企业架构。根据蒙古国《公司法》，公司的基础文件是公司章程。因此，公司章程应当解决合作协议所涉及的所有问题，包括出资比例、执行管理层、财务监督以及其他经营规范。",
          "然而，大家常犯一个大错：签署合作协议时往往会细化每项条件；成立公司时却抱有“既然各占50%，那所有东西就各占一半”的笼统观念，不精心制定章程，而是草率使用现成模板。多数纠纷源于财务。随着公司盈利增加，掌管经营权的一方可能为自己谋取不正当利益，例如获取更多分红甚至侵占公司资产。因此，必须在章程中详细规定资金管理和财务监督。",
          "纠纷诉至法院时，模板章程通常缺乏利润和亏损具体如何分配的条款。一家最初注册资金仅100万图格里克的公司，后来资产可能增长到数亿乃至数十亿图格里克。若缺乏对按股分配利润及税后利润的理解，就会产生混乱。实践中，一些实际盈利的公司会在报表中显示亏损；由于股利只能从净利润中分配，管理者可能故意做亏报表并转移资金。",
        ],
        quote: "",
        title:
          "创业者之间最大的纠纷往往集中在股权问题上。两位朋友合伙开公司，盈利一至三年后却产生股权分歧，这种情况为何发生？究竟忽略了什么？",
      },
      {
        paragraphs: [
          "是的。刚才所说的正是公司章程问题。中小企业创立的大多数公司都在使用现成模板。在国家登记局以及公章制作点附近，经常有“代办章程和文件”的模板服务。公司直接套用这些模板而不作定制，正是主要问题所在。",
        ],
        quote: "",
        title:
          "是否可以理解为，依赖口头约定会导致股东纠纷，而最终受伤害最大的是企业本身？您刚才也提到了现成模板。",
      },
      {
        paragraphs: [
          "大型企业在做出决定或签署合同时必定咨询律师。对中小企业而言，这或许与蒙古人的传统思维有关。就像遗嘱文化发展缓慢一样，人们更看重口头承诺。两个人创业时，往往基于“彼此绝不会出问题”的信任和道德约束。",
          "如果一方提出找律师把合同订得更有保障，另一方可能认为这是怀疑自己。正是对法律事务的轻率态度引发风险。当然，有些人经营数十年从未走进法院，因为他们恪守最初约定，在投资和利润分配上诚信守诺。但如今守信情况有所减少，往往只有信任破裂后才想到找律师。我们在预判风险和主动咨询律师方面仍有不足。",
          "在西方国家，双方决定合作后，通常会由各自律师共同拟定和谈判合同。这种文化在蒙古国才刚刚萌芽，中小企业也逐渐意识到咨询律师的价值。其形成对企业长期稳定至关重要。",
        ],
        quote: "",
        title:
          "这究竟是出于草率，还是因为法律服务费用高昂？缺乏正式制定章程和签署合同文化的主要原因是什么？",
      },
      {
        paragraphs: [
          "这不是不信任，而是把合同规定得更明确，对双方都有好处。即便是好友合伙创业，也常常因为细小财务问题而断绝私人关系。如果从一开始就在合同中明确规定，至少可以保住彼此的交情。",
          "一旦发生分歧，也容易达成共识：“既然当初这样约定，就按合同办理”，或者“让法院裁决”。",
          "相反，蒙古人往往在没有书面合同的情况下开展业务，一旦发生纠纷便争吵并断绝关系。即使不聘请昂贵的律师，双方也可以自己拟定合同，只需提前预判风险并将约定落实到书面。",
          "合同不必使用深奥法律术语，用清晰易懂的语言表达同样便于依法解决。法院根据文字和句子的字面含义解释合同，因此措辞与语法很重要。至少应养成提前预判风险并达成约定的习惯。",
          "许多人不读合同，或在未理解时就签字。这种草率态度在纠纷发生时危害极大。因此要认真阅读、理解合同，条件允许时最好咨询律师。律师凭借类似案件经验，可以客观预判潜在风险。",
        ],
        quote: "找律师审查合同，并不是不信任合作伙伴。",
        title: "总结来看，找律师审查合同并不是不信任合作伙伴，对吗？",
      },
      {
        paragraphs: [
          "总的来说，将此类信息作为法律证据采信非常困难。例如，通过Viber催要欠款，即使提交截图或证据保全记录，法院仍可能不予采信，因为对方只需声称“发消息的人不是我”。因此，这通常只属于非正式沟通凭证。最可靠的方法是将任何约定、交易或会议决议落实为书面形式，制作简要记录并签字确认。遗憾的是，我们仍较缺乏这种书面记录文化。",
        ],
        quote: "",
        title:
          "通过Viber、Messenger等社交软件进行的业务沟通能否作为法庭证据，还是像口头约定一样缺乏保障？",
      },
      {
        paragraphs: [
          "多数合同中总有一方处于相对优势地位。贷款和保险合同中，接受服务的一方往往只能接受既定条件，投资关系中也类似。投资者追求高回报并希望降低风险，为防止创始人低效使用资金，通常会提出严格条件。",
          "投资主要有两种常见形式：",
          "• 转让股权：为获得融资，将公司一定比例股份转让给投资者。投资者成为股东，直接参与公司决策，这是国际通行做法。",
          "• 债务或回报型融资：投资者不成为股东，也不参与内部运营，而是在一定期限后收回本金并获得约定回报，例如20%。",
          "商业和民事关系建立在合同自由原则之上，条款由双方自行约定。因此，在拟定投资合同和公司章程时，律师参与至关重要。律师可根据具体情况制定保护双方权益、明确责任的条款，从而降低日后纠纷风险。",
        ],
        quote: "",
        title:
          "初创企业和中小企业获得投资时，创始人可能面临权力削弱或过度控制。为了保护权益，应注意哪些合同和条款？",
      },
      {
        paragraphs: [
          "在租赁关系中，承租方有两个核心诉求：地点稳定和价格稳定。这些关系可以通过合同直接约定，并受到法律保护。然而，出租方常加入“若通胀或消费价格指数上涨超过一定比例，有权提高租金”的条款。每月500万图格里克的租金可能突然涨到700万，不接受就要求腾退。发生此类纠纷时，承租方可向法院起诉，维护按原约定期限和价格继续履行合同的权利。",
        ],
        quote: "",
        title:
          "办公和商业场地租赁中常出现提前解约、突然涨租或额外收费。这类纠纷有多常见，法律如何规定？",
      },
      {
        paragraphs: [
          "是的。自蒙古国颁布民主宪法以来，法律法规一直在不断更新。法律根据司法实践和专家学者研究不断完善，以调节现实纠纷。随着法律更新，保护公民和创业者权益的方式不断增加，而使用这些机制的核心人员就是律师。",
          "创业者拥有专属律师或咨询律所，就能防范风险于未然。律师从一开始参与合同流程，可以嵌入防止日后纠纷的保障条款。即使问题已经出现，律师也能帮助找到合法途径，抵御对方违反合同或法律的要求。总体而言，蒙古国法律为公民和机构保护自身合法权益提供了较完善的机制。",
        ],
        quote: "",
        title:
          "总的来说，在蒙古国开展业务，只要有白纸黑字的章程和清晰的操作界限，就能预防很多风险，是这样吗？",
      },
    ],
    sourceLabel: "查看原文",
    speakerName: "G.勒哈格瓦苏伦",
    speakerRole: "创始人、律师",
    title: "律师G.勒哈格瓦苏伦：公司章程是保护企业抵御风险的最大保障",
  },
  "insurance-risk": {
    contents: "专访问题",
    contentsLabel: "专访问题",
    imageAlt: "Tsets Partners律师事务所创始人G.勒哈格瓦苏伦",
    intro:
      "创业者在建立公司时，通常高度关注办公场地、设备、产品、员工和销售。然而，一旦这些资产和运营活动遭遇突发风险并陷入财务困境，他们却鲜少思考如何保护事业。那么，创业者真的需要保险吗？保险又该如何帮助他们度过财务风险？为此，我们采访了Tsets Partners律师事务所创始人G.勒哈格瓦苏伦。他是专注保险领域的律师，曾研究相关法院判决并公开发布报告，也拥有代表公众利益向相关机构提出申诉和建议的经验。",
    sections: [
      {
        paragraphs: [
          "简单来说，保险是一种降低或转移未来因特定潜在风险导致的财务损失的工具。对创业者而言，这一点尤为重要。例如，假设有人投资5亿图格里克开设商店、工厂、餐厅或服务型企业。这家企业绝非一朝一夕形成，它凝聚了多年的劳动、资金、贷款、员工工资、库存以及客户信任。",
          "火灾、水灾、设备故障、货物毁损，或经营过程中对他人造成损害等突发风险随时可能发生。保险并不保证风险绝不发生，而是在风险发生时赋予企业抵御财务冲击的能力。创业者无需独自以自己的资产承担全部风险，而是将其中一部分转移给保险机制。",
        ],
        quote: "",
        title: "作为创业者，首先应该对保险建立怎样的认识？",
      },
      {
        paragraphs: [
          "蒙古国保险业的萌芽可追溯至1934年，但商业保险体系直到1990年代向市场经济过渡期间才真正开始发展。2004年《保险法》修订案的通过进一步明确了行业法律基础。不过，从公众和创业者的认知及保险文化普及程度来看，我们仍处于发展初期。",
          "许多创业者往往只把保险视为申请银行贷款的硬性要求，或参与投标时必须履行的附带条件。事实上，保险的内涵远比这些更广，也更具实际价值。",
        ],
        quote: "",
        title: "蒙古国的保险体系发展了多久？",
      },
      {
        paragraphs: [
          "这取决于企业的经营特点。最起码，创业者需要明确与自身资产和运营相关的核心风险。",
          "第一是财产保险。如果拥有不动产、建筑物、设备或货物，财产保险至关重要。例如，一家存有价值3亿图格里克货物的商店遭遇火灾，若未投保，创业者必须自掏腰包重新采购；若按合理条件投保，就能依据合同获得赔偿，拥有恢复经营的资金来源。",
          "第二是责任保险。在经营过程中，面临风险的不只有企业自身财产，还可能对他人财产、客户或第三方权益造成损害。",
          "例如，商场内经营的企业若因自身失误导致相邻租户货物受损，赔偿责任应由谁承担？此类风险可通过责任保险化解。因此，创业者不仅要思考“我的财产投保了吗”，还要思考“如果经营活动给他人造成损失怎么办”。",
        ],
        quote: "",
        title: "中小型企业创业者最起码应该投保哪些保险？",
      },
      {
        paragraphs: [
          "我认为保险确实能起到很大的保护作用。这一点从蒙古国发生过的几起大型火灾中可以看出。",
          "2019年，易买得购物中心成吉思汗分店发生火灾，导致营业暂停，损失高达数十亿图格里克。本国保险公司无法独自承担重大风险时，通常会向国际保险公司进行再保险。在该事故中，本国保险公司与再保险公司共同赔付了损失。",
          "2020年6月7日，国家大百货大楼发生严重火灾。据该公司通报，大楼本身投保了不动产保险，各租户也根据合同为货物投保，最终获得了相当数额的赔偿。",
          "由此可见，当重大损失发生时，由企业自有资金、基础保险和再保险共同构成的风险保障体系，对企业重建和恢复经营至关重要。",
          "保险的价值在没有发生事故时往往并不显眼；唯有风险真正降临时，才能最深刻地体会其重要性。",
        ],
        quote: "",
        title: "在现实生活中，保险能在多大程度上保护企业？",
      },
      {
        paragraphs: [
          "这是保险行业最关键的问题之一。在培养公众和创业者保险意识的同时，保险公司也必须建立公正、透明、高效的理赔机制。",
          "投保人连续多年缴纳保费，当真正面临风险去申请理赔时，如果保险公司过于狭隘地解释条款、压低损失金额，甚至拒绝赔付，投保人遭受的不仅是经济损失，更会彻底失去对保险的信任。社会上由此形成“投保根本没用”的负面认知。一个人的不良体验会影响许多人对保险的态度。",
        ],
        quote: "",
        title: "有人批评即使投保也往往无法获得全额赔偿。对此您怎么看？",
      },
      {
        paragraphs: [
          "保险业务的长期成功不能仅凭收取多少保费来衡量，而应取决于风险发生时能否公正、透明、高效地履行对投保人的承诺。当然，合同约定之外的风险无法赔付；若投保人违反合同义务，也应承担相应法律和合同后果。",
          "必须坚持一个核心原则：合同条款越清晰、风险保障越切实、理赔机制越公正，保险文化就越容易建立。保险行业不仅要保护今天的投保人，更要培育明天的投保人。",
          "当人们看到越来越多通过公正理赔成功重建企业的案例时，“保险确实有必要”的观念自然会深入人心。",
        ],
        quote: "",
        title: "保险公司在理赔政策上应该注意什么？",
      },
      {
        paragraphs: [
          "创业者首先应该思考：“我可能会面临哪些风险？”在此基础上，便可借助保险管理财务风险。",
          "绝不能对任何合同一签了之。必须仔细阅读，弄清哪些条款有利或不利，并积极提出修改意见。对于保险合同，要特别明确哪些风险在保障范围内、哪些被排除，赔偿金额和评估方式如何确定，在什么条件下会拒赔，以及损失发生后需在何期限内提交哪些材料。",
          "保险并不保证风险绝不发生，而是一份财务保障，确保风险降临时仍有重建事业的能力。因此，创业者不应只问“我需要保险吗”，而应问“我的企业面临哪些风险，我该如何正确管理这些风险”。",
        ],
        quote:
          "企业的成功不仅在于获取利润，保护好已积累的资产和建立的事业免受风险侵害，同样是成功不可或缺的一部分。",
        title: "最后，您对创业者有什么建议？",
      },
    ],
    sourceLabel: "查看原文",
    speakerName: "G.勒哈格瓦苏伦",
    speakerRole: "创始人、律师",
    title: "律师G.勒哈格瓦苏伦：通过保险管理财务风险",
  },
} satisfies Record<BusinessInterview["slug"], InterviewTranslation>;

const translations = { en, zh } as const;

export function localizeBusinessInterview(
  article: BusinessInterview,
  locale: PublicLocale,
): LocalizedBusinessInterview {
  if (locale === "mn") return article;

  return {
    ...article,
    ...translations[locale][article.slug],
  };
}

export function localizeBusinessInterviews(
  articles: readonly BusinessInterview[],
  locale: PublicLocale,
) {
  return articles.map((article) => localizeBusinessInterview(article, locale));
}
