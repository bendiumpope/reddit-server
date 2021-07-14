import { InputType, Field } from "type-graphql";

// import { COOKIE_NAME } from "src/constants";
@InputType()
export class UsernamePasswordInput {
    @Field()
    username: string;
    @Field()
    email: string;
    @Field()
    password: string;
}
