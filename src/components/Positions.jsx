import { useState } from 'react'
import FadeInSection, { StaggerContainer, StaggerItem } from './FadeInSection'

export default function Positions() {
  const [activeTab, setActiveTab] = useState('city')
  const [expandedCard, setExpandedCard] = useState(null)

  const tabs = [
    { id: 'city', label: '🏘️ City' },
    { id: 'county', label: '🏙️ County' },
    { id: 'state', label: '🏛️ State' },
    { id: 'legislative', label: '📜 Legislative' },
    { id: 'governor', label: "⭐ Governor's Appointments" },
  ]

  const positions = {
    city: {
      elected: [
        {
          title: 'City Council Member (5)',
          desc: 'Governing body of the city. Council members elect the Mayor from among themselves.',
          bestFor: 'Leaders, collaborators',
          speech: '30 seconds',
          signatures: '3–5 signatures',
          details: 'The City Council is the legislative body of your city. Five members are elected, and they collectively vote on city ordinances, budgets, and policies. After election, the five Council members vote among themselves to select who will serve as Mayor. Council members are the only ones who vote on city issues — so this role carries real decision-making power all week.',
          tip: 'Run for Council if you want to be in the room where decisions are made. You don\'t have to be the loudest — you just have to show up and engage.',
        },
        {
          title: 'Mayor',
          desc: 'Chief executive. Runs city council meetings. Elected by the Council from within.',
          bestFor: 'Confident speakers, organized leaders',
          speech: 'N/A — elected by Council',
          signatures: 'N/A — elected by Council vote',
          details: 'The Mayor is not directly elected by the full city — they are chosen by the five elected Council members from among themselves. The Mayor runs city council meetings, works with the City Clerk on day-to-day duties, and serves as the chief executive of the city all week. If you want to be Mayor, your first goal is to get elected to City Council.',
          tip: 'To become Mayor, focus your Day 1 speech on getting elected to Council first. Once on Council, make your case to your fellow Council members.',
        },
        {
          title: 'City Clerk',
          desc: 'Election forms, records, roll call, certificates of election.',
          bestFor: 'Detail-oriented, organized',
          speech: '30 seconds',
          signatures: '3–5 signatures',
          details: 'The City Clerk handles all election paperwork, posts notices, issues Declaration of Candidacy forms, verifies signatures, prepares Certificates of Election, and administers the Oath of Office. City Clerks are also automatically appointed as Deputy County Clerks to help with county and state elections — meaning you\'re involved at every level of government all week.',
          tip: 'This role is perfect if you love organization and want to be involved in every single election without having to campaign for higher office.',
        },
        {
          title: 'City Treasurer',
          desc: 'Manages city finances.',
          bestFor: 'Numbers-minded, reliable',
          speech: '30 seconds',
          signatures: '3–5 signatures',
          details: 'The City Treasurer manages the city\'s Girls State bank account and financial records. You\'ll work with the Girls State banking system and handle financial transactions for the city. This is a steady, important role that keeps the city running smoothly.',
          tip: 'Great role if you want a defined responsibility without the pressure of high-visibility campaigning.',
        },
        {
          title: 'Senator',
          desc: 'Represents your city in the State Senate.',
          bestFor: 'Policy-minded, strong speakers',
          speech: '30 sec (primary) · 1 min (general)',
          signatures: '3–5 from your city only',
          details: 'One Senator is elected from each city, making 16 total in the Girls State Senate. The Senate is presided over by the Lt. Governor and the President Pro Tempore. Senators debate and vote on bills. This is a special early election so the legislature can organize before other state elections.',
          tip: 'If you love policy and debate, this is one of the best roles. You\'ll be writing and arguing real legislation all week.',
        },
        {
          title: 'Assemblymember (2)',
          desc: 'Represents your city in the State Assembly.',
          bestFor: 'Debaters, policy writers',
          speech: '30 sec (primary) · 1 min (general)',
          signatures: '3–5 from your city only',
          details: 'Two Assemblymembers are elected from each city, making 32 total in the Girls State Assembly. The Assembly is presided over by the Speaker of the House. Like Senators, Assemblymembers debate and vote on bills. Two spots per city means better odds than a Senate seat.',
          tip: 'Running for Assembly is a great way to get into the legislature. Two spots per city means better odds than Senate.',
        },
        {
          title: 'School Board Member',
          desc: 'Serves on the County Board of Education.',
          bestFor: 'Education advocates',
          speech: '30 seconds',
          signatures: '3–5 signatures',
          details: 'Each city elects one School Board Member who serves on the 5-person County Board of Education. The Board and County Superintendent conduct an Education Town Hall to gather input for the county and state education budget, using California\'s Eight State Priorities as a framework.',
          tip: 'Perfect if you care about education policy. You\'ll have a real voice in shaping the county\'s education priorities.',
        },
        {
          title: 'Board of Supervisors Member',
          desc: 'Serves on the County Board of Supervisors.',
          bestFor: 'Community-focused leaders',
          speech: '30 seconds',
          signatures: '3–5 signatures',
          details: 'Each city elects one Board of Supervisors Member who serves on the 5-person County Board of Supervisors. The Board of Supervisors is the governing body of the county with broad authority over county policy and budget.',
          tip: 'A great stepping stone — elected at city level but serving at county level, giving you experience at both tiers of government.',
        },
      ],
      appointed: [
        'Judge', 'City Manager', 'Wellness Commissioner',
        'Platform Committee', 'Campaign Committee', 'Ordinances Committee',
        'Jury Commissioner', 'Parks and Recreation Commission',
        'Housing Authority', 'Health and Welfare Board',
        'Highway Commission', 'Animal Control Board',
        'Library Commission', 'Disaster and Civil Defense Commission',
      ],
    },
    county: {
      elected: [
        {
          title: 'County Supervisor-at-Large',
          desc: '5-person Board of Supervisors. 4 from cities + 1 elected at-large at county level.',
          bestFor: 'Big-picture thinkers',
          speech: '30 seconds',
          signatures: '5–10 signatures',
          details: 'The Board of Supervisors is the governing body of the county. Four members come from city-level elections and one is elected at-large at the county level. The Board selects one of its members to serve as Chair. Running at-large means campaigning to the entire county.',
          tip: 'Running at-large means you need to build relationships across all four cities in your county — start networking early.',
        },
        {
          title: 'County Clerk',
          desc: 'Records, elections, notarization. Oversees Deputy County Clerks.',
          bestFor: 'Organized, detail-oriented',
          speech: '30 seconds',
          signatures: '5–10 signatures',
          details: 'The County Clerk manages all county election paperwork, posts notices, verifies signatures, and prepares Certificates of Election. City Clerks automatically serve as Deputy County Clerks, so the County Clerk oversees a team. You\'ll be involved in every county and state election.',
          tip: 'If you were City Clerk and loved it, County Clerk is the natural next step — more responsibility, bigger scope.',
        },
        {
          title: 'Treasurer/Tax Collector',
          desc: 'Manages county finances and tax collection.',
          bestFor: 'Finance-minded',
          speech: '30 seconds',
          signatures: '5–10 signatures',
          details: 'The County Treasurer/Tax Collector manages the county\'s Girls State bank account, handles financial transactions, and oversees tax collection. Works closely with the Board of Supervisors on budget matters.',
          tip: 'Solid role with clear responsibilities. Great if you want a defined position without high-stakes public speaking.',
        },
        {
          title: 'Recorder/Auditor',
          desc: 'Keeps financial records and public documents.',
          bestFor: 'Analytical thinkers',
          speech: '30 seconds',
          signatures: '5–10 signatures',
          details: 'The Recorder/Auditor maintains official county records including deeds and public transactions, and audits county financial records. This role ensures transparency and accountability in county government.',
          tip: 'Less visible but genuinely important. Great for delegates who want a substantive role without the spotlight.',
        },
        {
          title: 'Assessor',
          desc: 'Places value on property for taxation purposes.',
          bestFor: 'Research-oriented',
          speech: '30 seconds',
          signatures: '5–10 signatures',
          details: 'The County Assessor determines the value of property within the county for taxation purposes. This role involves research, analysis, and applying consistent standards across the county.',
          tip: 'A unique role with less competition. You\'ll learn something genuinely interesting about how local government finances work.',
        },
        {
          title: 'Superior Court Judge',
          desc: 'Presides over the mock Superior Court trial.',
          bestFor: 'Logical, composed speakers',
          speech: '30 seconds',
          signatures: '5–10 signatures',
          details: 'The Superior Court Judge presides over the mock Superior Court trial held in each county toward the end of the week. You\'ll manage courtroom procedure, rule on objections, and ensure a fair trial. The mock trial includes the District Attorney, Public Defender, Sheriff/Coroner, Jury Commissioner, witnesses, and a jury selected from delegates.',
          tip: 'If you\'re interested in law, this is one of the most unique and memorable roles at Girls State. You\'ll actually run a trial.',
        },
        {
          title: 'District Attorney',
          desc: 'Prosecutes in the mock trial. Argues the case for the people.',
          bestFor: 'Debaters, persuasive speakers',
          speech: '30 seconds',
          signatures: '5–10 signatures',
          details: 'The District Attorney represents the people in the mock Superior Court trial. You\'ll build and argue the prosecution\'s case, examine witnesses, and make closing arguments. The burden of proof in California is "beyond a reasonable doubt" — the highest standard in the legal system.',
          tip: 'One of the most exciting roles at Girls State. If you love debate and persuasion, this is your moment.',
        },
        {
          title: 'Sheriff/Coroner',
          desc: 'Law enforcement role in the mock trial.',
          bestFor: 'Confident, decisive',
          speech: '30 seconds',
          signatures: '5–10 signatures',
          details: 'The Sheriff/Coroner serves as a key participant in the mock Superior Court trial, providing law enforcement testimony and maintaining order in the courtroom.',
          tip: 'A fun, active role in the trial. You\'ll be a witness and key figure in the courtroom proceedings.',
        },
        {
          title: 'Superintendent of Schools',
          desc: 'Leads county school board. Runs the Education Town Hall.',
          bestFor: 'Education advocates',
          speech: '30 seconds',
          signatures: '5–10 signatures',
          details: 'The Superintendent of Schools leads the county Board of Education and conducts an Education Town Hall meeting to gather input for the county and state education budget. The Board uses California\'s Eight State Priorities as a framework.',
          tip: 'If education is your passion, this is the role. You\'ll actually run a town hall meeting and shape education policy for your county.',
        },
        {
          title: 'Public Defender',
          desc: 'Defends in the mock trial. Argues for the defendant.',
          bestFor: 'Empathetic, strong debaters',
          speech: '30 seconds',
          signatures: '5–10 signatures',
          details: 'The Public Defender represents the defendant in the mock Superior Court trial. In 1963, the U.S. Supreme Court ruled in Gideon v. Wainwright that the government must provide free legal counsel to defendants — a right your role embodies. You\'ll build the defense case, cross-examine witnesses, and make closing arguments.',
          tip: 'The Public Defender and District Attorney are the two most dramatic roles in the trial. If you love arguing and thinking on your feet, run for one of these.',
        },
        {
          title: 'School Board Member-at-Large',
          desc: '5-person Board of Education. 4 from cities + 1 elected at-large.',
          bestFor: 'Education advocates',
          speech: '30 seconds',
          signatures: '5–10 signatures',
          details: 'The at-large School Board Member is elected at the county level representing the entire county on the Board of Education. Works with the Superintendent of Schools on education policy and budget.',
          tip: 'Running at-large means county-wide campaigning — build relationships across all four cities in your county.',
        },
      ],
      appointed: [
        'Jury Commissioner', 'Parks & Recreation Commission',
        'Housing Authority', 'Health & Welfare Board',
        'Highway Commission', 'Animal Control Board',
        'Disaster & Civil Defense Commission', 'Library Commission',
      ],
    },
    state: {
      partisan: [
        {
          title: 'Governor ⭐',
          fee: '$500',
          desc: 'Chief executive. Signs or vetoes bills. Delivers the Governor\'s Address at closing.',
          bestFor: 'The most visible, competitive role',
          speech: '2 minutes (primary)',
          signatures: '11–15 from 2+ counties',
          details: 'The Governor is the chief executive of Girls State. After election, the Governor signs or vetoes bills, delivers the Governor\'s Address at the Closing Ceremony, appoints delegates to 42+ ceremonial positions, and is the primary pathway to Girls Nation selection. The Governor participates in the whistle stop tour, visiting all four counties.',
          tip: 'Start fundraising and networking across counties immediately. You need G$500 in filing fees and signatures from at least 2 counties.',
        },
        {
          title: 'Lt. Governor',
          fee: '$400',
          desc: 'President of the Senate. Acts as Governor if needed. Participates in whistle stop tour.',
          bestFor: 'Strong speakers, policy-minded',
          speech: '1 minute (primary)',
          signatures: '11–15 from 2+ counties',
          details: 'The Lt. Governor serves as President of the Senate and presides over Senate sessions. They act as Governor in the Governor\'s absence and participate in the whistle stop tour visiting all four counties.',
          tip: 'A great alternative to Governor — high visibility with slightly less competition. You\'ll be in the Senate chamber all week.',
        },
        {
          title: 'Attorney General',
          fee: '$400',
          desc: 'Argues the Moot Court First Amendment case. Participates in whistle stop tour.',
          bestFor: 'Debaters, legal thinkers',
          speech: '30 seconds (primary)',
          signatures: '11–15 from 2+ counties',
          details: 'The Attorney General argues the prosecution side of the Supreme Court Moot Court — a First Amendment case argued before the Supreme Court Justices. They also participate in the whistle stop tour. The candidate with the second-highest votes in the general election serves as opposing counsel.',
          tip: 'If you love debate and legal argument, this is one of the most intellectually exciting roles at Girls State.',
        },
        {
          title: 'Secretary of State',
          fee: '$400',
          desc: 'Certifies elections. Oversees the pre-registration review.',
          bestFor: 'Organized, process-oriented',
          speech: '30 seconds (primary)',
          signatures: '11–15 from 2+ counties',
          details: 'The Secretary of State certifies all election results after receiving them from County Clerks. They oversee the voter pre-registration process and present the pre-registration review at the Closing Ceremony.',
          tip: 'A critical administrative role. If you love systems and process, this is your role.',
        },
        {
          title: 'Treasurer',
          fee: '$350',
          desc: 'Manages state finances.',
          bestFor: 'Finance-minded',
          speech: '30 seconds (primary)',
          signatures: '11–15 from 2+ counties',
          details: 'The State Treasurer manages the Girls State bank account at the state level, handles financial transactions, and oversees state revenue. Works closely with the Controller on financial oversight.',
          tip: 'Lower filing fee and less competition than Governor or AG. A solid state-level role.',
        },
        {
          title: 'Controller',
          fee: '$350',
          desc: 'Financial oversight of the state.',
          bestFor: 'Analytical thinkers',
          speech: '30 seconds (primary)',
          signatures: '11–15 from 2+ counties',
          details: 'The State Controller provides independent financial oversight of state government, auditing accounts and ensuring fiscal accountability. Works alongside the Treasurer on state financial management.',
          tip: 'Another lower-competition state office. Great if you want a state-level role without the intense campaigning of Governor or AG.',
        },
      ],
      nonPartisan: [
        {
          title: 'Superintendent of Public Instruction',
          fee: '$350',
          desc: 'Participates in whistle stop tour. Both parties can sign nomination papers.',
          bestFor: 'Education advocates',
          speech: '30 seconds (primary)',
          signatures: '11–15 from 2+ counties',
          details: 'The Superintendent of Public Instruction is non-partisan — both Nationalists and Federalists can sign your nomination papers. The top two vote-getters in the primary advance to the general election. Participates in the whistle stop tour visiting all four counties.',
          tip: 'Being non-partisan is a huge advantage — you can collect signatures from both parties, doubling your potential supporter pool.',
        },
        {
          title: 'Justice of the Supreme Court',
          fee: '$350',
          desc: '7 elected. 4 unelected candidates serve as Clerks in Moot Court.',
          bestFor: 'Logical, composed',
          speech: '30 seconds (primary)',
          signatures: '11–15 from 2+ counties',
          details: 'The 11 candidates with the most votes in the primary advance to the general election. 7 are elected as Justices. The 4 unelected candidates still participate as Clerks in the Moot Court. The Supreme Court hears the First Amendment case argued by the Attorney General. Also non-partisan — both parties can sign your nomination papers.',
          tip: 'Even if you don\'t win a Justice seat, the top 11 still participate in the Moot Court. Running for Supreme Court is low-risk, high-reward.',
        },
      ],
    },
    legislative: [
      {
        title: 'Senate President Pro Tempore',
        desc: 'Elected by Senators at first meeting. Presides over Senate until Lt. Governor takes office.',
        details: 'The Pro Tem is elected by the 16 Senators at their first meeting and presides over Senate sessions until the Lt. Governor takes office. This is a leadership role within the legislature itself.',
        tip: 'If you\'re elected Senator, immediately start building relationships with your fellow Senators — the Pro Tem is elected by them.',
      },
      {
        title: 'Speaker of the House',
        desc: 'Elected by Assemblymembers at first meeting. Presides over the Assembly.',
        details: 'The Speaker is elected by the 32 Assemblymembers at their first meeting and presides over all Assembly sessions. This is the top leadership role in the Assembly.',
        tip: 'Build relationships with fellow Assemblymembers from Day 1 — they elect the Speaker.',
      },
      {
        title: 'Majority Floor Leader',
        desc: 'Elected by majority party of each House. Presides in absence of the Presiding Officer.',
        details: 'The Majority Floor Leader is elected by the majority party members of each House at the first meeting. They preside over sessions when the Presiding Officer is absent and help coordinate the majority party\'s legislative agenda.',
        tip: 'A great leadership role within the legislature if you\'re in the majority party.',
      },
      {
        title: 'Minority Whip',
        desc: 'Leader of the minority party. Ensures party unity on platform issues.',
        details: 'The Minority Whip is elected by the minority party members of each House. Their primary responsibility is ensuring party unity when issues addressed in the party platform are being debated and voted on.',
        tip: 'Even in the minority, this is a real leadership role with influence over your party\'s legislative strategy.',
      },
      {
        title: 'Platform Committee Chair ★',
        desc: 'Appointed. Leads the 16-member party platform committee.',
        details: 'The Platform Committee has 16 members (one from each city per party). The Chair is selected by the committee members. The Platform Committee formulates the party\'s platform — the policies and planks the party endorses.',
        tip: 'You don\'t need to win an election for this — you need to be selected by your fellow Platform Committee members. Build relationships within your party.',
      },
      {
        title: 'Campaign Committee Chair ★',
        desc: 'Appointed. Leads the 16-member campaign committee.',
        details: 'The Campaign Committee has 16 members (one from each city per party). The Chair is selected by the committee members. The Campaign Committee coordinates all party campaign activities, rallies, and candidate support.',
        tip: 'Another appointed leadership role. Great for delegates who love strategy and organizing people.',
      },
      {
        title: 'Keynote Speaker ★',
        desc: 'Party-selected honor. Delivers the keynote address at the party rally.',
        details: 'The Keynote Speaker is selected by the party — not elected by ballot. This is a recognition of leadership, voice, and presence within the party. The Keynote Speaker delivers a major address at the party rally, setting the tone for the party\'s message and vision for the week.',
        tip: 'You can\'t campaign for this directly — you earn it by being genuinely engaged, vocal, and present in your party from Day 1.',
      },
      {
        title: 'Party Leader',
        desc: 'Conducts party meetings and coordinates all party activities.',
        details: 'The Party Leader is elected by the full party membership. They conduct all party meetings and coordinate party activities. Each city selects a candidate who gives a 1-minute speech at the county meeting, then top candidates give 2-minute speeches at the first party meeting before the full party votes.',
        tip: 'A high-visibility elected role within your party. Great for delegates who want party leadership without running for a state constitutional office.',
      },
      {
        title: 'Lobbyist',
        desc: 'Open to any delegate who is not a legislator.',
        details: 'Any Girls State delegate who is not an elected legislator can be a legislative lobbyist. Lobbyists address committees when they are meeting to give information or state opinions on proposals. Certification by the third clerk of that House is required before speaking in committee.',
        tip: 'One of the most underrated roles. If you didn\'t get elected to the legislature, become a lobbyist and still influence legislation.',
      },
      {
        title: 'Clerk, Page, Analyst',
        desc: 'Appointed roles open to non-legislators.',
        details: '4 Clerks and 3+ Pages per House are appointed before the first legislative meeting. Analysts provide research support. These roles are open to any delegate who is not an elected legislator.',
        tip: 'Great way to be involved in the legislative process even if you didn\'t win a Senate or Assembly seat.',
      },
    ],
    governor: {
      staff: [
        {
          title: 'Executive Secretary to the Governor',
          desc: 'Primary administrative support to the Governor.',
          details: 'The Executive Secretary manages the Governor\'s schedule, correspondence, and administrative operations. You work directly with the Governor on day-to-day duties and serve as the primary point of contact for the Governor\'s office.',
          tip: 'If you want to be close to the action at the highest level of Girls State government without running for election, this is the role.',
        },
        {
          title: 'Assistant Executive Secretary to the Governor',
          desc: 'Supports the Executive Secretary and Governor\'s office.',
          details: 'The Assistant Executive Secretary provides additional administrative support to the Governor\'s office, assisting with correspondence, scheduling, and coordination of Governor\'s activities.',
          tip: 'A great entry point into the Governor\'s office. Work closely with the Governor and Executive Secretary.',
        },
        {
          title: 'Assistant for Community Relations',
          desc: 'Manages the Governor\'s relationship with the community.',
          details: 'The Assistant for Community Relations handles outreach between the Governor\'s office and the broader Girls State community — cities, counties, and delegates. You help ensure the Governor stays connected to the people.',
          tip: 'Perfect for delegates who love connecting people and building relationships across the entire Girls State community.',
        },
        {
          title: 'Legislative Secretary',
          desc: 'Liaison between the Governor\'s office and the Legislature.',
          details: 'The Legislative Secretary tracks legislation moving through the Senate and Assembly, briefs the Governor on bills, and coordinates communication between the Governor\'s office and legislative leadership.',
          tip: 'Ideal if you\'re interested in both the executive and legislative branches. You\'ll have a foot in both worlds.',
        },
        {
          title: 'State Police',
          desc: 'Provides security and order for the Governor\'s office.',
          details: 'The State Police role provides ceremonial security and order for the Governor and state government operations during Girls State.',
          tip: 'A unique ceremonial role with visibility at major Girls State events.',
        },
        {
          title: 'Press Secretary',
          desc: 'Manages communications and media for the Governor.',
          details: 'The Press Secretary handles all communications from the Governor\'s office, drafts statements, manages the Governor\'s public image, and coordinates with the Press Corps and journalism team.',
          tip: 'Perfect for delegates who love writing, communications, and being the voice behind the scenes.',
        },
        {
          title: 'Appointments Secretary',
          desc: 'Manages the Governor\'s ceremonial appointment process.',
          details: 'The Appointments Secretary manages the process of receiving and organizing letters of interest for the Governor\'s ceremonial appointments, helping the Governor make informed decisions about who to appoint to each board and commission.',
          tip: 'You\'ll be at the center of one of the most exciting parts of the Governor\'s role — the appointment process.',
        },
        {
          title: 'Cabinet Secretary',
          desc: 'Coordinates the Governor\'s cabinet and appointed officials.',
          details: 'The Cabinet Secretary coordinates communication and meetings between the Governor and the various department heads and appointed officials. You help ensure the Governor\'s policy agenda is carried out across all departments.',
          tip: 'A high-level role with broad visibility across all of Girls State government.',
        },
      ],
      ceremonial: [
        {
          title: 'Agricultural Labor Relations Board',
          desc: 'Oversees labor relations in California\'s agricultural industry.',
          details: 'The Agricultural Labor Relations Board protects the rights of agricultural workers to organize and bargain collectively. In Girls State, this board addresses issues of farmworker rights, labor conditions, and agricultural policy.',
          tip: 'Great for delegates interested in labor rights, immigration policy, or California\'s agricultural economy.',
        },
        {
          title: 'Arts Council',
          desc: 'Supports and promotes the arts across California.',
          details: 'The California Arts Council funds and promotes arts programs, artists, and cultural organizations across the state. In Girls State, this board develops arts policy and supports creative expression in the community.',
          tip: 'Perfect for delegates with a passion for the arts, culture, or creative expression.',
        },
        {
          title: 'California Exposition and State Fair Board',
          desc: 'Oversees the California State Fair.',
          details: 'This board manages the California State Fair and Exposition, one of the largest state fairs in the country. It oversees programming, operations, and the promotion of California\'s agricultural and cultural heritage.',
          tip: 'A fun, unique board for delegates interested in events, agriculture, and California culture.',
        },
        {
          title: 'California Office of Tourism',
          desc: 'Promotes California as a travel destination.',
          details: 'The California Office of Tourism develops and implements strategies to promote California to domestic and international visitors, supporting the state\'s tourism economy.',
          tip: 'Great for delegates interested in marketing, economics, or California\'s diverse regions and attractions.',
        },
        {
          title: 'California State University Board',
          desc: 'Governs the California State University system.',
          details: 'The CSU Board of Trustees governs the 23-campus California State University system, the largest four-year public university system in the United States. It sets policy for academics, finance, and operations.',
          tip: 'Highly relevant for delegates thinking about college — you\'ll engage with real higher education policy.',
        },
        {
          title: 'Commission on Teacher Credentialing',
          desc: 'Sets standards for teacher preparation and licensing.',
          details: 'This commission establishes and enforces standards for the preparation, certification, and discipline of teachers and other school personnel in California.',
          tip: 'Perfect for delegates interested in education, teaching, or school policy.',
        },
        {
          title: 'Commission on the Status of Women & Girls',
          desc: 'Advocates for policies that advance equity for women and girls.',
          details: 'The California Commission on the Status of Women and Girls identifies and works to eliminate inequities in state laws and conditions affecting women and girls. It advocates for policies in health, safety, employment, education, and equal representation.',
          tip: 'Deeply aligned with the mission of Girls State itself. A powerful and meaningful appointment.',
        },
        {
          title: 'Dept of Conservation',
          desc: 'Manages California\'s natural resources.',
          details: 'The Department of Conservation manages California\'s natural resources including land, minerals, and geological hazards. It oversees programs related to farmland preservation, mine reclamation, and earthquake preparedness.',
          tip: 'Great for delegates passionate about environmental science, geology, or natural resource management.',
        },
        {
          title: 'Dept of Consumer Affairs',
          desc: 'Protects consumers and licenses professionals.',
          details: 'The Department of Consumer Affairs protects California consumers through licensing and regulation of various professions and businesses, ensuring public health and safety.',
          tip: 'Relevant for delegates interested in business regulation, consumer rights, or public protection.',
        },
        {
          title: 'Dept of Corrections',
          desc: 'Oversees California\'s correctional system.',
          details: 'The Department of Corrections and Rehabilitation manages California\'s state prisons and oversees rehabilitation programs for incarcerated individuals. It addresses issues of criminal justice, recidivism, and public safety.',
          tip: 'For delegates interested in criminal justice reform, rehabilitation, or public safety policy.',
        },
        {
          title: 'Dept of Fair Employment and Housing',
          desc: 'Enforces civil rights laws in employment and housing.',
          details: 'This department enforces California\'s civil rights laws prohibiting discrimination in employment, housing, and public accommodations based on protected characteristics.',
          tip: 'Perfect for delegates passionate about civil rights, equity, and anti-discrimination policy.',
        },
        {
          title: 'Dept of Fish and Game',
          desc: 'Manages California\'s fish and wildlife resources.',
          details: 'The Department of Fish and Wildlife manages and protects California\'s diverse fish, wildlife, and plant resources and the habitats upon which they depend.',
          tip: 'Great for delegates interested in environmental science, wildlife conservation, or outdoor recreation.',
        },
        {
          title: 'Dept of Food and Agriculture',
          desc: 'Supports California\'s agricultural industry.',
          details: 'The Department of Food and Agriculture promotes and protects California\'s $50+ billion agricultural industry, ensuring food safety, animal health, and fair business practices.',
          tip: 'California is the nation\'s top agricultural state. This is a significant and impactful board.',
        },
        {
          title: 'Dept of Forestry and Fire Protection',
          desc: 'Manages wildfire prevention and forest resources.',
          details: 'CAL FIRE is responsible for fire protection on over 31 million acres of California\'s privately-owned wildlands and manages the state\'s forest resources. Wildfire is one of California\'s most pressing issues.',
          tip: 'Extremely relevant given California\'s ongoing wildfire crisis. A high-impact, timely appointment.',
        },
        {
          title: 'Dept of Health Service',
          desc: 'Oversees public health programs and services.',
          details: 'The Department of Health Services oversees public health programs, disease prevention, and health care access across California.',
          tip: 'For delegates interested in public health, medicine, or healthcare policy.',
        },
        {
          title: 'Dept of Highway Patrol',
          desc: 'Oversees California\'s highway safety and law enforcement.',
          details: 'The California Highway Patrol provides law enforcement services on California\'s state highway system and provides protective services for the Governor and other state officials.',
          tip: 'For delegates interested in law enforcement, public safety, or transportation policy.',
        },
        {
          title: 'Dept of Homeland Security',
          desc: 'Coordinates emergency preparedness and security.',
          details: 'This department coordinates California\'s emergency preparedness, disaster response, and security efforts, working with federal, state, and local agencies.',
          tip: 'For delegates interested in emergency management, national security, or disaster preparedness.',
        },
        {
          title: 'Dept of Housing and Community Development',
          desc: 'Addresses California\'s housing crisis.',
          details: 'This department develops housing policy and programs to address California\'s severe housing shortage and affordability crisis, one of the state\'s most pressing issues.',
          tip: 'Housing is one of California\'s biggest challenges. This is a highly relevant and impactful appointment.',
        },
        {
          title: 'Dept of Mental Health',
          desc: 'Oversees mental health services across California.',
          details: 'This department oversees the planning, implementation, and oversight of mental health services across California, addressing one of the state\'s most significant public health challenges.',
          tip: 'Mental health is a critical issue for young people. A deeply meaningful and relevant appointment.',
        },
        {
          title: 'Dept of Motor Vehicles',
          desc: 'Manages vehicle registration and driver licensing.',
          details: 'The DMV manages vehicle registration, driver licensing, and identification cards for California residents. It also oversees autonomous vehicle regulations and emerging transportation technology.',
          tip: 'More interesting than it sounds — the DMV is at the forefront of autonomous vehicle policy and emerging transportation tech.',
        },
        {
          title: 'Dept of Parks and Recreation',
          desc: 'Manages California\'s state parks system.',
          details: 'California State Parks manages 280 park units covering over 1.4 million acres, including beaches, redwood forests, deserts, and historic sites. It protects natural and cultural resources while providing recreation opportunities.',
          tip: 'For delegates who love the outdoors, conservation, or California\'s incredible natural heritage.',
        },
        {
          title: 'Dept of Pesticide Regulation',
          desc: 'Regulates pesticide use to protect health and environment.',
          details: 'This department regulates pesticides to protect human health and the environment, with particular attention to farmworker safety and environmental justice communities.',
          tip: 'Connects to environmental justice, agricultural policy, and public health — a multifaceted appointment.',
        },
        {
          title: 'Dept of Social Services',
          desc: 'Administers social safety net programs.',
          details: 'The Department of Social Services administers programs that provide assistance to California\'s most vulnerable residents, including food assistance, cash aid, child welfare, and adult protective services.',
          tip: 'For delegates passionate about social justice, poverty reduction, or community support systems.',
        },
        {
          title: 'Dept of State Banking',
          desc: 'Regulates state-chartered banks and financial institutions.',
          details: 'This department regulates and supervises state-chartered banks, credit unions, and other financial institutions to ensure their safety and soundness and protect consumers.',
          tip: 'For delegates interested in finance, economics, or financial regulation.',
        },
        {
          title: 'Dept of Transportation',
          desc: 'Manages California\'s transportation infrastructure.',
          details: 'Caltrans manages over 50,000 miles of California\'s highway and freeway lanes, provides intercity rail services, and works to improve mobility across all transportation modes.',
          tip: 'Transportation infrastructure is a massive policy area. Great for delegates interested in urban planning, climate, or infrastructure.',
        },
        {
          title: 'Dept of Water Resources',
          desc: 'Manages California\'s water supply.',
          details: 'The Department of Water Resources manages California\'s water supply, including the State Water Project, flood management, and drought response. Water is one of California\'s most critical and contested resources.',
          tip: 'Water policy is one of California\'s most important and complex issues. A high-impact, relevant appointment.',
        },
        {
          title: 'Education Secretary',
          desc: 'Senior advisor to the Governor on education policy.',
          details: 'The Education Secretary serves as the Governor\'s senior advisor on all education matters, coordinating education policy across K-12 and higher education systems.',
          tip: 'A cabinet-level role with direct access to the Governor on education — one of California\'s most important policy areas.',
        },
        {
          title: 'Energy Commission',
          desc: 'Oversees California\'s energy policy and clean energy transition.',
          details: 'The California Energy Commission leads the state\'s efforts to reduce energy consumption, develop clean energy resources, and ensure reliable energy supply. California is a national leader in clean energy.',
          tip: 'Climate and clean energy are defining issues of our generation. A highly relevant and forward-looking appointment.',
        },
        {
          title: 'Fair Political Practices Commission',
          desc: 'Enforces California\'s political reform laws.',
          details: 'The FPPC enforces California\'s campaign finance, lobbying, and conflict of interest laws, ensuring transparency and accountability in government.',
          tip: 'Directly relevant to what you\'re doing at Girls State — campaign finance rules, disclosure requirements, and political ethics.',
        },
        {
          title: 'Franchise Tax Board',
          desc: 'Administers California\'s personal income and corporate tax programs.',
          details: 'The Franchise Tax Board administers California\'s personal income tax and corporate tax programs, collecting revenue that funds state services.',
          tip: 'For delegates interested in fiscal policy, taxation, or government finance.',
        },
        {
          title: 'Legal Affairs Secretary',
          desc: 'Senior legal advisor to the Governor.',
          details: 'The Legal Affairs Secretary serves as the Governor\'s senior legal advisor, reviewing legislation, executive orders, and legal matters affecting the Governor\'s office.',
          tip: 'A prestigious legal role with direct access to the Governor. Great for delegates interested in law or government.',
        },
        {
          title: 'Lottery Commission',
          desc: 'Oversees the California State Lottery.',
          details: 'The California State Lottery Commission oversees lottery operations, with proceeds benefiting public education. The lottery generates over $1 billion annually for California schools.',
          tip: 'An interesting intersection of gaming regulation, public finance, and education funding.',
        },
        {
          title: 'Medical Board of California',
          desc: 'Licenses and regulates physicians in California.',
          details: 'The Medical Board licenses and regulates physicians and surgeons in California, protecting consumers by ensuring the competency and integrity of medical professionals.',
          tip: 'For delegates interested in healthcare, medicine, or professional regulation.',
        },
        {
          title: 'Native American Heritage Commission',
          desc: 'Protects Native American cultural and spiritual resources.',
          details: 'The Native American Heritage Commission protects Native American cultural and spiritual resources, including sacred sites, burial grounds, and cultural artifacts. California has the second-largest Native American population in the United States.',
          tip: 'A deeply meaningful appointment connected to California\'s history and ongoing work toward justice for Indigenous communities.',
        },
        {
          title: 'Office of Emergency Service',
          desc: 'Coordinates California\'s emergency preparedness and disaster response.',
          details: 'Cal OES coordinates the state\'s emergency preparedness, response, recovery, and mitigation activities for natural and man-made disasters, including earthquakes, wildfires, and floods.',
          tip: 'Given California\'s vulnerability to natural disasters, this is one of the most impactful and relevant appointments.',
        },
        {
          title: 'Public Utilities Commission',
          desc: 'Regulates California\'s utilities and telecommunications.',
          details: 'The CPUC regulates privately owned electric, natural gas, telecommunications, water, railroad, rail transit, and passenger transportation companies in California.',
          tip: 'Utilities regulation touches every Californian\'s daily life. A broad and impactful policy area.',
        },
        {
          title: 'Secretary for Program Development',
          desc: 'Develops and coordinates state programs and initiatives.',
          details: 'This role supports the development and coordination of new state programs and policy initiatives across multiple departments, working directly with the Governor\'s office.',
          tip: 'A creative, forward-looking role for delegates who love developing new ideas and programs.',
        },
        {
          title: 'Student Aid Commission',
          desc: 'Administers California\'s student financial aid programs.',
          details: 'The California Student Aid Commission administers the Cal Grant program and other financial aid programs that help California students afford college. This directly affects hundreds of thousands of students.',
          tip: 'Directly relevant to your future. California\'s student aid programs are among the most generous in the nation.',
        },
        {
          title: 'University of California Board',
          desc: 'Governs the University of California system.',
          details: 'The UC Board of Regents governs the 10-campus University of California system, one of the world\'s premier public research university systems. It sets policy for academics, admissions, finance, and operations.',
          tip: 'Highly relevant for college-bound delegates. You\'ll engage with real UC admissions and academic policy.',
        },
        {
          title: 'Water Resource Control Board',
          desc: 'Protects California\'s water quality.',
          details: 'The State Water Resources Control Board protects the quality of California\'s surface and groundwater resources, regulating water rights and water quality across the state.',
          tip: 'Water quality and water rights are critical California issues. A high-impact environmental appointment.',
        },
        {
          title: 'Wildlife Conservation Board',
          desc: 'Funds wildlife habitat conservation across California.',
          details: 'The Wildlife Conservation Board funds the acquisition and development of land for wildlife habitat, public access, and recreation, protecting California\'s extraordinary biodiversity.',
          tip: 'For delegates passionate about conservation, biodiversity, or California\'s natural environment.',
        },
        {
          title: 'Youth Authority',
          desc: 'Oversees juvenile justice and rehabilitation programs.',
          details: 'The Division of Juvenile Justice provides education, treatment, and rehabilitation programs for California\'s most serious juvenile offenders, with a focus on reducing recidivism and supporting successful reentry.',
          tip: 'For delegates interested in juvenile justice, rehabilitation, or youth advocacy.',
        },
      ],
    },
  }

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const PositionCard = ({ pos, id, showFee = false }) => {
    const isExpanded = expandedCard === id
    return (
      <div className="rounded-xl overflow-hidden transition-all duration-200"
           style={{
             backgroundColor: isExpanded ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)',
             border: `1px solid ${isExpanded ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.2)'}`,
           }}>
        <div className="p-5">
          <div className="flex justify-between items-start mb-1">
            <h3 style={{ color: '#C9A84C' }} className="font-bold text-sm">{pos.title}</h3>
            {showFee && pos.fee && (
              <span className="text-xs px-2 py-1 rounded-full text-white flex-shrink-0 ml-2"
                    style={{ backgroundColor: 'rgba(201,168,76,0.3)' }}>G$ {pos.fee}</span>
            )}
          </div>
          <p className="text-white opacity-65 text-xs mb-2">{pos.desc}</p>
          <div className="flex flex-wrap gap-3 mb-3">
            {pos.bestFor && (
              <span className="text-xs" style={{ color: '#C9A84C', opacity: 0.7 }}>
                👤 {pos.bestFor}
              </span>
            )}
            {pos.speech && (
              <span className="text-xs text-white opacity-40">🎤 {pos.speech}</span>
            )}
            {pos.signatures && (
              <span className="text-xs text-white opacity-40">✍️ {pos.signatures}</span>
            )}
          </div>
          <button
            onClick={() => toggleCard(id)}
            className="text-xs font-medium transition-all duration-200"
            style={{ color: '#C9A84C' }}
          >
            {isExpanded ? 'Show Less ↑' : 'Learn More →'}
          </button>
        </div>
        {isExpanded && (
          <div className="px-5 pb-5 border-t" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
            <p className="text-white opacity-70 text-xs leading-relaxed mt-4 mb-3">{pos.details}</p>
            {pos.tip && (
              <div className="p-3 rounded-lg"
                   style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <p className="text-xs" style={{ color: '#C9A84C' }}>
                  💡 <strong>Tip:</strong> {pos.tip}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <FadeInSection>
    <section id="office" style={{ backgroundColor: '#1B2A4A' }} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
            Every Single Position
          </p>
          <h2 style={{ color: 'white', fontFamily: '"Playfair Display", serif' }}
              className="text-4xl md:text-5xl font-bold mb-4">
            Positions & Offices
          </h2>
          <p className="text-white opacity-60 max-w-xl mx-auto">
            On Day 1, everyone runs for something. There are no spectators at Girls State. Click any position to learn more.
          </p>
        </div>

        <StaggerContainer className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <StaggerItem key={tab.id}>
              <button
                onClick={() => { setActiveTab(tab.id); setExpandedCard(null) }}
                className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: activeTab === tab.id ? '#C9A84C' : 'rgba(255,255,255,0.1)',
                  color: activeTab === tab.id ? '#1B2A4A' : 'white',
                }}
              >
                {tab.label}
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {activeTab === 'city' && (
          <div>
            <p className="text-white opacity-60 text-sm mb-6 text-center">
              City offices are elected on Day 1. Your city (~30 people) is your home base all week. Requires 3–5 signatures.
            </p>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {positions.city.elected.map((pos, i) => (
                <StaggerItem key={pos.title}>
                  <PositionCard pos={pos} id={`city-${i}`} />
                </StaggerItem>
              ))}
            </StaggerContainer>
            <div className="p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
              <p className="text-white opacity-50 text-xs uppercase tracking-widest mb-3">Appointed Positions — No Election Required</p>
              <StaggerContainer className="flex flex-wrap gap-2">
                {positions.city.appointed.map((pos) => (
                  <StaggerItem key={pos} className="px-3 py-1 rounded-full text-xs text-white opacity-70"
                        style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>{pos}</StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        )}

        {activeTab === 'county' && (
          <div>
            <p className="text-white opacity-60 text-sm mb-6 text-center">
              County elections happen mid-week. Requires 5–10 signatures. County officials represent a broader constituency.
            </p>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {positions.county.elected.map((pos, i) => (
                <StaggerItem key={pos.title}>
                  <PositionCard pos={pos} id={`county-${i}`} />
                </StaggerItem>
              ))}
            </StaggerContainer>
            <div className="p-5 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
              <p className="text-white opacity-50 text-xs uppercase tracking-widest mb-3">Appointed Positions — No Election Required</p>
              <StaggerContainer className="flex flex-wrap gap-2">
                {positions.county.appointed.map((pos) => (
                  <StaggerItem key={pos} className="px-3 py-1 rounded-full text-xs text-white opacity-70"
                        style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>{pos}</StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        )}

        {activeTab === 'state' && (
          <div>
            <div className="mb-8">
              <p className="text-white opacity-50 text-xs uppercase tracking-widest mb-4 text-center">
                Partisan Offices — Must win party primary first · Requires 11–15 signatures from 2+ counties
              </p>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {positions.state.partisan.map((pos, i) => (
                  <StaggerItem key={pos.title}>
                    <PositionCard pos={pos} id={`state-p-${i}`} showFee={true} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            <div className="mb-8">
              <p className="text-white opacity-50 text-xs uppercase tracking-widest mb-4 text-center">
                Non-Partisan Offices — Both parties can sign nomination papers
              </p>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {positions.state.nonPartisan.map((pos, i) => (
                  <StaggerItem key={pos.title}>
                    <PositionCard pos={pos} id={`state-np-${i}`} showFee={true} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        )}

        {activeTab === 'legislative' && (
          <div>
            <p className="text-white opacity-60 text-sm mb-6 text-center">
              The Legislature has 16 Senators (1 per city) and 32 Assemblymembers (2 per city). Click any role to learn more.
            </p>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {positions.legislative.map((pos, i) => (
                <StaggerItem key={pos.title}>
                  <PositionCard pos={pos} id={`leg-${i}`} />
                </StaggerItem>
              ))}
            </StaggerContainer>
            <div className="mt-6 p-4 rounded-xl text-center"
                 style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}>
              <p className="text-sm" style={{ color: '#C9A84C' }}>
                ★ You may hold only ONE elected office at Girls State, but as many appointed offices as you can responsibly handle.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'governor' && (
          <div>
            <p className="text-white opacity-60 text-sm mb-2 text-center">
              You don't have to win an election to hold a meaningful position.
            </p>
            <p className="text-white opacity-60 text-sm mb-8 text-center max-w-2xl mx-auto">
              The newly elected Governor appoints delegates to the following departments, agencies, boards and commissions before the close of the session. Submit a <strong className="text-white">letter of interest</strong> by the deadline on the daily schedule.
            </p>

            <div className="mb-10">
              <p className="text-white opacity-50 text-xs uppercase tracking-widest mb-4 text-center">
                State-Level Appointed Staff Positions — Click to Learn More
              </p>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {positions.governor.staff.map((pos, i) => (
                  <StaggerItem key={pos.title}>
                    <PositionCard pos={pos} id={`gov-staff-${i}`} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div>
              <p className="text-white opacity-50 text-xs uppercase tracking-widest mb-6 text-center">
                Governor's Ceremonial Appointments — 42 Positions · Click Any to Learn More
              </p>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                {positions.governor.ceremonial.map((pos, i) => (
                  <StaggerItem key={pos.title}>
                    <PositionCard pos={pos} id={`gov-cer-${i}`} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <div className="p-5 rounded-xl text-center"
                   style={{ backgroundColor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}>
                <p className="text-sm font-medium mb-2" style={{ color: '#C9A84C' }}>
                  💡 How to Get a Ceremonial Appointment
                </p>
                <p className="text-white opacity-65 text-sm">
                  Write a letter of interest to the Governor expressing which department or board you'd like to serve on and why. Submit it by the deadline on the daily schedule. You do not need to win an election — this is open to all delegates.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
    </FadeInSection>
  )
}