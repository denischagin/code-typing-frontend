const golang = "func (s *PostService) GetPostByUUID(uuid string) (getPostDto dto.GetPostDto, err error) {\n" +
    "  post, err := s.repo.GetPostByUUID(uuid)\n" +
    "  if err != nil {\n" +
    "    s.log.Infof(`error getting post by uuid: '%s' due to error: %v`, uuid, err)\n" +
    "    return getPostDto, err\n" +
    "  }\n" +
    "\n" +
    "  err = copier.Copy(&getPostDto, &post)\n" +
    "  if err != nil {\n" +
    "    return getPostDto, &errors.MappingError{Message: `struct mapping error`}\n" +
    "  }\n" +
    "  return getPostDto, nil\n" +
    "}\n" +
    "\n" +
    "func (s *PostService) GetPosts() (postsDto []dto.GetPostDto, err error) {\n" +
    "  posts := s.repo.GetPosts()\n" +
    "  err = copier.Copy(&postsDto, &posts)\n" +
    "  if err != nil {\n" +
    "    return postsDto, &errors.MappingError{Message: `struct mapping error`}\n" +
    "  }\n" +
    "  return postsDto, nil\n" +
    "}\n"

const react = "const TypingPage = () => {\n    const {isFetching} = useGetTextQuery()\n\n    return (\n        <Container\n            display=\"flex\"\n            flexDirection=\"column\"\n            flexGrow=\"1\"\n            maxW=\"1000px\"\n            minH=\"100%\"\n        >\n            <Flex justify=\"space-between\" align=\"center\">\n                <Timer/>\n\n                <HStack spacing={2}>\n                    <ButtonNewText/>\n                    <ButtonRepeatText/>\n                    <SelectChangeLanguage/>\n                </HStack>\n            </Flex>\n\n            <ResultSpeed/>\n\n            {isFetching && <Progress mt=\"10px\" isIndeterminate/>}\n\n            <Typing/>\n        </Container>\n    )\n}\n\n\nexport default TypingPage"

const java = "@Service\n" +
    "public class AuthUserService {\n" +
    "    private final ModelMapper mapper;\n" +
    "    private final AuthUserRepository authUserRepository;\n" +
    "\n" +
    "    public AuthUserService(ModelMapper mapper, AuthUserRepository authUserRepository) {\n" +
    "        this.mapper = mapper;\n" +
    "        this.authUserRepository = authUserRepository;\n" +
    "    }\n" +
    "\n" +
    "    public UserDetails getUserByLogin(String login) {\n" +
    "        return mapper.map(\n" +
    "                authUserRepository.findAuthUserByLogin(login)\n" +
    "                        .orElseThrow(() -> new UserNotFoundException(login)),\n" +
    "                UserDetails.class\n" +
    "        );\n" +
    "    }\n" +
    "}\n"

const kotlin = "fun postLogin() {\n" +
    "    val user = User(sharedPreference.email, sharedPreference.name, sharedPreference.password)\n" +
    "    taskRepository.loginUser(user)\n" +
    "        .subscribe({\n" +
    "            _loginLiveData.value = it\n" +
    "            sharedPreference.token = it.token\n" +
    "            sharedPreference.name = it.login\n" +
    "        }, {\n" +
    "            if (it is HttpException) {\n" +
    "                val body = it.response()?.errorBody()\n" +
    "                val gson = Gson()\n" +
    "                val adapter: TypeAdapter<Authorization> =\n" +
    "                    gson.getAdapter(Authorization::class.java)\n" +
    "                val error: Authorization = adapter.fromJson(body?.string())\n" +
    "                _loginLiveData.value = error\n" +
    "          }\n" +
    "      })\n" +
    "}\n"

const sql = "WITH RECURSIVE r AS (\n" +
    "   SELECT dependency_id, child_id, parent_id, is_alternative\n" +
    "   FROM system_dependency\n" +
    "   WHERE parent_id = 1\n" +
    "\n" +
    "   UNION\n" +
    "\n" +
    "   SELECT system_dependency.dependency_id, system_dependency.child_id, system_dependency.parent_id, system_dependency.is_alternative\n" +
    "   FROM system_dependency\n" +
    "      JOIN r\n" +
    "          ON system_dependency.child_id = r.parent_id\n" +
    ")\n" +
    "\n" +
    "SELECT * FROM r\n" +
    "WHERE parent_id = 1\n"

export const texts: string[] = [golang, react, java, kotlin, sql]