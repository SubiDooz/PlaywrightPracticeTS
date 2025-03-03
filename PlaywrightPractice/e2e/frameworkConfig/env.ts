export class Env{
    public static readonly BASE_URL = process.env.URL!=null?process.env.URL : "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    public static readonly USERNAME = process.env.LOGINNAME!=null?process.env.LOGINNAME : "Admin";
    public static readonly PASSWORD = process.env.PASSWORD!=null?process.env.PASSWORD : "admin123";

}
