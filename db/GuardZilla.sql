PGDMP     $    :    	            w        
   GuardZilla    11.2    11.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �           1262    16393 
   GuardZilla    DATABASE     �   CREATE DATABASE "GuardZilla" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "GuardZilla";
             postgres    false            �            1255    16515    log_userlock_changes()    FUNCTION       CREATE FUNCTION public.log_userlock_changes() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
if(TG_OP='INSERT' or TG_OP='UPDATE') then
INSERT INTO public.userlock_audits(
	userid, environmentid, comment,Operation, changed_on)
	VALUES (NEW.userid, NEW.environmentid, NEW.comment,TG_OP, now());
RETURN NEW;
elseif (TG_OP='DELETE') then
INSERT INTO public.userlock_audits(
	userid, environmentid, comment,Operation, changed_on)
	VALUES (OLD.userid, OLD.environmentid, OLD.comment,TG_OP, now());
RETURN OLD;
end if;

END;
$$;
 -   DROP FUNCTION public.log_userlock_changes();
       public       postgres    false            �            1259    16428    environment    TABLE     b   CREATE TABLE public.environment (
    id integer NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.environment;
       public         postgres    false            �            1259    16426    Enviroment_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Enviroment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Enviroment_id_seq";
       public       postgres    false    199            �           0    0    Enviroment_id_seq    SEQUENCE OWNED BY     J   ALTER SEQUENCE public."Enviroment_id_seq" OWNED BY public.environment.id;
            public       postgres    false    198            �            1259    16435    userlock    TABLE     �   CREATE TABLE public.userlock (
    userid integer NOT NULL,
    environmentid integer NOT NULL,
    comment character varying,
    insertdate timestamp(4) with time zone,
    updatedate timestamp(4) with time zone
);
    DROP TABLE public.userlock;
       public         postgres    false            �            1259    16509    userlock_audits    TABLE     �   CREATE TABLE public.userlock_audits (
    userid integer NOT NULL,
    environmentid integer NOT NULL,
    comment character varying,
    changed_on timestamp(6) with time zone,
    operation character varying
);
 #   DROP TABLE public.userlock_audits;
       public         postgres    false            �            1259    16403    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying NOT NULL,
    firstname character varying,
    lastname character varying
);
    DROP TABLE public.users;
       public         postgres    false            �            1259    16401    users_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.users_id_seq1;
       public       postgres    false    197            �           0    0    users_id_seq1    SEQUENCE OWNED BY     >   ALTER SEQUENCE public.users_id_seq1 OWNED BY public.users.id;
            public       postgres    false    196                       2604    16431    environment id    DEFAULT     q   ALTER TABLE ONLY public.environment ALTER COLUMN id SET DEFAULT nextval('public."Enviroment_id_seq"'::regclass);
 =   ALTER TABLE public.environment ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    198    199    199            
           2604    16406    users id    DEFAULT     e   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq1'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    196    197    197            �          0    16428    environment 
   TABLE DATA               /   COPY public.environment (id, name) FROM stdin;
    public       postgres    false    199   <        �          0    16435    userlock 
   TABLE DATA               Z   COPY public.userlock (userid, environmentid, comment, insertdate, updatedate) FROM stdin;
    public       postgres    false    200   n        �          0    16509    userlock_audits 
   TABLE DATA               `   COPY public.userlock_audits (userid, environmentid, comment, changed_on, operation) FROM stdin;
    public       postgres    false    201   �        �          0    16403    users 
   TABLE DATA               B   COPY public.users (id, username, firstname, lastname) FROM stdin;
    public       postgres    false    197   !       �           0    0    Enviroment_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Enviroment_id_seq"', 1, false);
            public       postgres    false    198            �           0    0    users_id_seq1    SEQUENCE SET     <   SELECT pg_catalog.setval('public.users_id_seq1', 1, false);
            public       postgres    false    196                       2606    16448    environment enviroment_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.environment
    ADD CONSTRAINT enviroment_pkey PRIMARY KEY (id);
 E   ALTER TABLE ONLY public.environment DROP CONSTRAINT enviroment_pkey;
       public         postgres    false    199                       2606    16411    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         postgres    false    197                       1259    16454 &   fki_fk_enviroment_uselock.enviromentid    INDEX     f   CREATE INDEX "fki_fk_enviroment_uselock.enviromentid" ON public.userlock USING btree (environmentid);
 <   DROP INDEX public."fki_fk_enviroment_uselock.enviromentid";
       public         postgres    false    200                       1259    16446    fki_fk_user_uselock.userid    INDEX     S   CREATE INDEX "fki_fk_user_uselock.userid" ON public.userlock USING btree (userid);
 0   DROP INDEX public."fki_fk_user_uselock.userid";
       public         postgres    false    200                       2620    16516    userlock userlock_changes    TRIGGER     �   CREATE TRIGGER userlock_changes BEFORE INSERT OR DELETE OR UPDATE ON public.userlock FOR EACH ROW EXECUTE PROCEDURE public.log_userlock_changes();
 2   DROP TRIGGER userlock_changes ON public.userlock;
       public       postgres    false    200    214                       2606    16449 -   userlock fk_environment_uselock.environmentid    FK CONSTRAINT     �   ALTER TABLE ONLY public.userlock
    ADD CONSTRAINT "fk_environment_uselock.environmentid" FOREIGN KEY (environmentid) REFERENCES public.environment(id) ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.userlock DROP CONSTRAINT "fk_environment_uselock.environmentid";
       public       postgres    false    199    200    2063                       2606    16441    userlock fk_user_uselock.userid    FK CONSTRAINT     �   ALTER TABLE ONLY public.userlock
    ADD CONSTRAINT "fk_user_uselock.userid" FOREIGN KEY (userid) REFERENCES public.users(id) ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.userlock DROP CONSTRAINT "fk_user_uselock.userid";
       public       postgres    false    200    197    2061            �   "   x�3�I-.�2��/H-J,���K������ g�P      �      x������ � �      �   m   x��˫
�0��=�]�2�lMpA/MA�A�_A����#���;@� '�E(����K�3���C7hz�������/�l(̀��ƶ,���1"Ȉ�+Cn7��FJ#:      �   �   x�%�M
�P��y�������'�J[]
�.z�Ji)��Ѕ���q�E2��dA�O�����+:���*�S5�m@�ެios��?s�|0H�ZnR�(����,��Kv�{��]�#�C�f�̊�89d|�$��--ִQJ6�Y�"ǩ���#��o�o�Ƙ/J�a�     