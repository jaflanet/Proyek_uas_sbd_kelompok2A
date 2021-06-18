--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Ubuntu 13.3-1.pgdg20.04+1)
-- Dumped by pg_dump version 13.2

-- Started on 2021-06-14 02:51:31

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 673 (class 1247 OID 22347894)
-- Name: agentstype; Type: TYPE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TYPE public.agentstype AS ENUM (
    'Astra',
    'Breach',
    'Brimstone',
    'Cypher',
    'Jett',
    'Killjoy',
    'Omen',
    'Phoenix',
    'Raze',
    'Reyna',
    'Sage',
    'Skye',
    'Sova',
    'Viper',
    'Yoru'
);


ALTER TYPE public.agentstype OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 688 (class 1247 OID 22347986)
-- Name: gametype; Type: TYPE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TYPE public.gametype AS ENUM (
    'PUBG',
    'Valorant',
    'Mobile Legend'
);


ALTER TYPE public.gametype OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 658 (class 1247 OID 22347821)
-- Name: gendertype; Type: TYPE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TYPE public.gendertype AS ENUM (
    'Male',
    'Female'
);


ALTER TYPE public.gendertype OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 664 (class 1247 OID 22347856)
-- Name: onlinetype; Type: TYPE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TYPE public.onlinetype AS ENUM (
    'Morning',
    'Afternoon',
    'Evening',
    'Night'
);


ALTER TYPE public.onlinetype OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 682 (class 1247 OID 22347954)
-- Name: rankmltype; Type: TYPE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TYPE public.rankmltype AS ENUM (
    'Warrior',
    'Elite',
    'Master',
    'Grandmaster',
    'Epic',
    'Legend',
    'Mythic',
    'Mythical Glory'
);


ALTER TYPE public.rankmltype OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 676 (class 1247 OID 22347926)
-- Name: rankpubgtype; Type: TYPE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TYPE public.rankpubgtype AS ENUM (
    'Bronze',
    'Silver',
    'Gold',
    'Platinum',
    'Diamond',
    'Crown',
    'Ace',
    'Conqueror'
);


ALTER TYPE public.rankpubgtype OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 667 (class 1247 OID 22347866)
-- Name: rankvalotype; Type: TYPE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TYPE public.rankvalotype AS ENUM (
    'Iron',
    'Bronze',
    'Silver',
    'Gold',
    'Platinum',
    'Diamond',
    'Immortal',
    'Radiant'
);


ALTER TYPE public.rankvalotype OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 661 (class 1247 OID 22347826)
-- Name: regiontype; Type: TYPE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TYPE public.regiontype AS ENUM (
    'North America',
    'South America',
    ' Central America',
    'Caribbean',
    'Central & South Asia',
    'Northeastern Asia',
    'Australia & Oceania',
    'Noerthern Europe',
    'Southern Europe',
    'Eastern Europe',
    'Western Europe',
    'Middle East',
    'Nortern Africa',
    'Southern Africa'
);


ALTER TYPE public.regiontype OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 685 (class 1247 OID 22347972)
-- Name: rolemltype; Type: TYPE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TYPE public.rolemltype AS ENUM (
    'Assasin',
    'Fighter',
    'Mage',
    'Marksman',
    'Support',
    'Tank'
);


ALTER TYPE public.rolemltype OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 679 (class 1247 OID 22347944)
-- Name: rolepubgtype; Type: TYPE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TYPE public.rolepubgtype AS ENUM (
    'Rusher',
    'Scout',
    'Sniper',
    'Support'
);


ALTER TYPE public.rolepubgtype OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 670 (class 1247 OID 22347884)
-- Name: rolevalotype; Type: TYPE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TYPE public.rolevalotype AS ENUM (
    'Duelist',
    'Controller',
    'Initiator',
    'Sentinel'
);


ALTER TYPE public.rolevalotype OWNER TO hmthsyfvkvmlxo;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 229 (class 1259 OID 22348018)
-- Name: mobilelegend; Type: TABLE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TABLE public.mobilelegend (
    id integer NOT NULL,
    usernameml character varying(16),
    role public.rolemltype,
    rank public.rankmltype,
    usernameweb character varying(16)
);


ALTER TABLE public.mobilelegend OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 226 (class 1259 OID 22347993)
-- Name: pengguna; Type: TABLE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TABLE public.pengguna (
    username character varying(16) NOT NULL,
    age integer,
    gender public.gendertype,
    region public.regiontype,
    onlinetime public.onlinetype
);


ALTER TABLE public.pengguna OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 228 (class 1259 OID 22348008)
-- Name: pubg; Type: TABLE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TABLE public.pubg (
    usernamepubg character varying(16) NOT NULL,
    role public.rolepubgtype,
    rank public.rankpubgtype,
    usernameweb character varying(16)
);


ALTER TABLE public.pubg OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 234 (class 1259 OID 22485926)
-- Name: teamml; Type: VIEW; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE VIEW public.teamml AS
 SELECT pengguna.username,
    pengguna.age,
    pengguna.gender,
    pengguna.region,
    pengguna.onlinetime,
    mobilelegend.id,
    mobilelegend.usernameml,
    mobilelegend.role,
    mobilelegend.rank,
    mobilelegend.usernameweb
   FROM (public.pengguna
     FULL JOIN public.mobilelegend ON (((pengguna.username)::text = (mobilelegend.usernameweb)::text)));


ALTER TABLE public.teamml OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 235 (class 1259 OID 22485930)
-- Name: teampubg; Type: VIEW; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE VIEW public.teampubg AS
 SELECT pengguna.username,
    pengguna.age,
    pengguna.gender,
    pengguna.region,
    pengguna.onlinetime,
    pubg.usernamepubg,
    pubg.role,
    pubg.rank,
    pubg.usernameweb
   FROM (public.pengguna
     FULL JOIN public.pubg ON (((pengguna.username)::text = (pubg.usernameweb)::text)));


ALTER TABLE public.teampubg OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 227 (class 1259 OID 22347998)
-- Name: valorant; Type: TABLE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TABLE public.valorant (
    iddantag character varying(24) NOT NULL,
    rank public.rankvalotype,
    favoriteagents public.agentstype,
    role public.rolevalotype,
    usernameweb character varying(16)
);


ALTER TABLE public.valorant OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 233 (class 1259 OID 22485922)
-- Name: teamvalo; Type: VIEW; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE VIEW public.teamvalo AS
 SELECT pengguna.username,
    pengguna.age,
    pengguna.gender,
    pengguna.region,
    pengguna.onlinetime,
    valorant.iddantag,
    valorant.rank,
    valorant.favoriteagents,
    valorant.role,
    valorant.usernameweb
   FROM (public.pengguna
     FULL JOIN public.valorant ON (((pengguna.username)::text = (valorant.usernameweb)::text)));


ALTER TABLE public.teamvalo OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 232 (class 1259 OID 22469396)
-- Name: username; Type: TABLE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TABLE public.username (
    username character varying(16)
);


ALTER TABLE public.username OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 230 (class 1259 OID 22444918)
-- Name: username1; Type: TABLE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TABLE public.username1 (
    username character varying(16)
);


ALTER TABLE public.username1 OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 231 (class 1259 OID 22446427)
-- Name: username_test; Type: TABLE; Schema: public; Owner: hmthsyfvkvmlxo
--

CREATE TABLE public.username_test (
    username character varying(25)
);


ALTER TABLE public.username_test OWNER TO hmthsyfvkvmlxo;

--
-- TOC entry 4077 (class 0 OID 22348018)
-- Dependencies: 229
-- Data for Name: mobilelegend; Type: TABLE DATA; Schema: public; Owner: hmthsyfvkvmlxo
--

COPY public.mobilelegend (id, usernameml, role, rank, usernameweb) FROM stdin;
39455874	Corazon29	Mage	Mythic	Aidan
45566874	Corazonnn29	Mage	Mythic	Daffa
654767	circleK	Fighter	Epic	Nina
537557645	blackpink	Fighter	Warrior	Jonathan
64574674	Fatimah	Assasin	Epic	Fatma
364646	pademsky	Marksman	Epic	Putri
776788	blackblack	Tank	Warrior	Omar
8566747	Tricktrick	Assasin	Master	Adi
8973580	ninaninu	Tank	Mythic	Karen
574564	Tricktrick	Tank	Master	Satriyo
2356656	Tricktrick	Fighter	Master	Pindika
5455443	Tricktrick	Marksman	Master	Dika
878786	Tricktrick	Assasin	Master	Hadi
6465781	Tricktrick	Marksman	Master	Ahmad
9836735	Tricktrick	Mage	Master	Fakhri
756775674	Basilisk	Fighter	Mythical Glory	Aidan
8675857	ararara	Marksman	Legend	Daffa
190827	popo	Marksman	Grandmaster	Aidan
5784325	Diha550	Mage	Epic	Diha
234324	aidangantengbanget	Fighter	Warrior	Aidan
190820	padem	Mage	Grandmaster	pademmm
1982	ganteng	Marksman	Master	pademmm
1972	pademmmmm	Mage	Epic	pademmm
123123	hadikeren	Assasin	Warrior	hadikun
1983	jongob	Fighter	Master	Karen
12123	Aidankeren	Fighter	Elite	Aidan
12345	akucantikgaes	Mage	Warrior	omarcantik
12313	OMAR ANAK MAMAH	Mage	Master	OMARMOCH13
\.


--
-- TOC entry 4074 (class 0 OID 22347993)
-- Dependencies: 226
-- Data for Name: pengguna; Type: TABLE DATA; Schema: public; Owner: hmthsyfvkvmlxo
--

COPY public.pengguna (username, age, gender, region, onlinetime) FROM stdin;
Aidan	20	Male	Caribbean	Morning
Daffa	20	Male	Caribbean	Morning
Karen	20	Male	Caribbean	Afternoon
Nina	20	Male	Caribbean	Afternoon
Jonathan	20	Male	Caribbean	Evening
Fatma	20	Male	Caribbean	Evening
Putri	20	Male	Caribbean	Night
Faren	20	Male	Caribbean	Night
Adi	9	Male	Caribbean	Morning
Satriyo	9	Male	Caribbean	Morning
Pindika	9	Male	Caribbean	Afternoon
Dika	9	Male	Caribbean	Afternoon
Hadi	9	Male	Caribbean	Evening
Ahmad	9	Male	Caribbean	Evening
Fakhri	9	Male	Caribbean	Night
Omar	9	Male	Caribbean	Night
vf	\N	\N	Southern Africa	\N
v	\N	\N	Southern Africa	\N
vfr	\N	\N	Southern Africa	\N
vfrf	\N	\N	Southern Africa	\N
vfrfv	\N	\N	Southern Africa	\N
vfrfvre	\N	\N	Southern Africa	\N
vfrfvr	\N	\N	Southern Africa	\N
koko	19	\N	Southern Africa	\N
hadiiijwijs	22	Male	Southern Africa	Evening
okoko	98	Female	Southern Africa	\N
padempait	19	Female	Middle East	Morning
cantik	18	Female	South America	Afternoon
lung	23	Male	Western Europe	Morning
Diha	22	Male	Caribbean	Evening
Jon	20	Male	Caribbean	Morning
pademmm	90	Female	Australia & Oceania	Evening
aleale	32	Male	Caribbean	Morning
hadikun	23	Male	Nortern Africa	Night
buaya	12	Male	South America	Afternoon
jonaaaa	40	Female	North America	Afternoon
jav	23	Male	South America	Morning
cobakaliini	16	Male	Northeastern Asia	Evening
min	67	Female	Northeastern Asia	Evening
pastibisa	37	Female	Eastern Europe	Afternoon
dedego	15	Male	North America	Morning
hohoho	12	Male	North America	Morning
jonagokil	23	Male	North America	Morning
omarbuaya	23	Female	North America	Afternoon
omarcantik	20	Female	Nortern Africa	Night
OMARMOCH13	11	Female	South America	Afternoon
\.


--
-- TOC entry 4076 (class 0 OID 22348008)
-- Dependencies: 228
-- Data for Name: pubg; Type: TABLE DATA; Schema: public; Owner: hmthsyfvkvmlxo
--

COPY public.pubg (usernamepubg, role, rank, usernameweb) FROM stdin;
Razon12	Support	Ace	Aidan
coradan	Support	Platinum	Daffa
Razon62	Support	Ace	Daffa
blackpink	Support	Ace	Faren
trickling	Support	Ace	Adi
Fatimah	Rusher	Conqueror	Fatma
pademsky	Rusher	Silver	Putri
blackblack	Scout	Silver	Omar
Tricktrick02	Scout	Gold	Satriyo
tongkar	Scout	Gold	Pindika
kartong	Sniper	Platinum	Dika
arabic	Sniper	Platinum	Hadi
criminal	Sniper	Diamond	Ahmad
smooth	Rusher	Crown	Fakhri
JAfff	Rusher	Bronze	Jonathan
fefef	Support	Diamond	Aidan
Proplay	Support	Crown	Karen
koko	Support	Diamond	Aidan
Diha550	Support	Gold	Diha
aidanto	Rusher	Bronze	Aidan
boboho	Support	Crown	pademmm
aduy	Support	Ace	Adi
aduy123	Support	Ace	Adi
aduy128	Support	Ace	Adi
LOPR	Support	Ace	Aidan
topisaya	Support	Gold	Karen
nutshooter	Rusher	Conqueror	hadikun
bisadong	Support	Diamond	Karen
hadigokil	Sniper	Bronze	hadikun
cobatest	Support	Crown	Jon
aidankun	Scout	Silver	Aidan
aidanbanget	Rusher	Conqueror	Aidan
akucantiksekali	Rusher	Conqueror	omarcantik
\.


--
-- TOC entry 4080 (class 0 OID 22469396)
-- Dependencies: 232
-- Data for Name: username; Type: TABLE DATA; Schema: public; Owner: hmthsyfvkvmlxo
--

COPY public.username (username) FROM stdin;
Aidan
\.


--
-- TOC entry 4078 (class 0 OID 22444918)
-- Dependencies: 230
-- Data for Name: username1; Type: TABLE DATA; Schema: public; Owner: hmthsyfvkvmlxo
--

COPY public.username1 (username) FROM stdin;
\.


--
-- TOC entry 4079 (class 0 OID 22446427)
-- Dependencies: 231
-- Data for Name: username_test; Type: TABLE DATA; Schema: public; Owner: hmthsyfvkvmlxo
--

COPY public.username_test (username) FROM stdin;
\.


--
-- TOC entry 4075 (class 0 OID 22347998)
-- Dependencies: 227
-- Data for Name: valorant; Type: TABLE DATA; Schema: public; Owner: hmthsyfvkvmlxo
--

COPY public.valorant (iddantag, rank, favoriteagents, role, usernameweb) FROM stdin;
aidan2929	Radiant	Jett	Controller	Aidan
jo123	Radiant	Jett	Controller	Jonathan
hadi123	Radiant	Jett	Controller	Hadi
putri123	Radiant	Jett	Controller	Putri
faren123	Radiant	Jett	Controller	Faren
Adi8701	Bronze	Skye	Duelist	Adi
Fakhri907	Gold	Killjoy	Sentinel	Fakhri
Nina12	Diamond	Omen	Initiator	Nina
Daffa129	Iron	Sage	Initiator	Daffa
Ahmad278	Immortal	Sage	Initiator	Ahmad
Karen129	Platinum	Sage	Initiator	Karen
Satrito129	Bronze	Sage	Initiator	Satriyo
Omara129	Iron	Sage	Initiator	Omar
Pindika8701	Bronze	Skye	Duelist	Pindika
Fatma907	Gold	Killjoy	Sentinel	Fatma
Dika12	Silver	Omen	Initiator	Dika
hudiwag2929	Gold	Raze	Duelist	Aidan
Muhammad12	Platinum	Cypher	Initiator	Aidan
Diha55	Diamond	Viper	Controller	Diha
aidangokil#2222	Iron	Astra	Duelist	Aidan
boboho	Platinum	Killjoy	Initiator	pademmm
hadhad	Radiant	Jett	Controller	hadikun
hadipro123	Radiant	Astra	Duelist	hadikun
dedenutz#223	Radiant	Astra	Duelist	dedegobs
jonagokil#1212	Radiant	Phoenix	Controller	jonagokil
akucantiksekali#1122	Iron	Viper	Duelist	omarcantik
\.


--
-- TOC entry 3937 (class 2606 OID 22348022)
-- Name: mobilelegend mobilelegend_pkey; Type: CONSTRAINT; Schema: public; Owner: hmthsyfvkvmlxo
--

ALTER TABLE ONLY public.mobilelegend
    ADD CONSTRAINT mobilelegend_pkey PRIMARY KEY (id);


--
-- TOC entry 3931 (class 2606 OID 22347997)
-- Name: pengguna pengguna_pkey; Type: CONSTRAINT; Schema: public; Owner: hmthsyfvkvmlxo
--

ALTER TABLE ONLY public.pengguna
    ADD CONSTRAINT pengguna_pkey PRIMARY KEY (username);


--
-- TOC entry 3935 (class 2606 OID 22348012)
-- Name: pubg pubg_pkey; Type: CONSTRAINT; Schema: public; Owner: hmthsyfvkvmlxo
--

ALTER TABLE ONLY public.pubg
    ADD CONSTRAINT pubg_pkey PRIMARY KEY (usernamepubg);


--
-- TOC entry 3933 (class 2606 OID 22348002)
-- Name: valorant valorant_pkey; Type: CONSTRAINT; Schema: public; Owner: hmthsyfvkvmlxo
--

ALTER TABLE ONLY public.valorant
    ADD CONSTRAINT valorant_pkey PRIMARY KEY (iddantag);


--
-- TOC entry 3938 (class 2606 OID 22348003)
-- Name: valorant fkkk; Type: FK CONSTRAINT; Schema: public; Owner: hmthsyfvkvmlxo
--

ALTER TABLE ONLY public.valorant
    ADD CONSTRAINT fkkk FOREIGN KEY (usernameweb) REFERENCES public.pengguna(username);


--
-- TOC entry 3939 (class 2606 OID 22348013)
-- Name: pubg fkkk; Type: FK CONSTRAINT; Schema: public; Owner: hmthsyfvkvmlxo
--

ALTER TABLE ONLY public.pubg
    ADD CONSTRAINT fkkk FOREIGN KEY (usernameweb) REFERENCES public.pengguna(username);


--
-- TOC entry 3940 (class 2606 OID 22348023)
-- Name: mobilelegend fkkk; Type: FK CONSTRAINT; Schema: public; Owner: hmthsyfvkvmlxo
--

ALTER TABLE ONLY public.mobilelegend
    ADD CONSTRAINT fkkk FOREIGN KEY (usernameweb) REFERENCES public.pengguna(username);


--
-- TOC entry 4086 (class 0 OID 0)
-- Dependencies: 7
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: hmthsyfvkvmlxo
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO hmthsyfvkvmlxo;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- TOC entry 4087 (class 0 OID 0)
-- Dependencies: 721
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO hmthsyfvkvmlxo;


-- Completed on 2021-06-14 02:52:02

--
-- PostgreSQL database dump complete
--

