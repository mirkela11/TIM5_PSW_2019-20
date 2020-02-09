package selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;


import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.testng.Assert.assertNotNull;
import static org.testng.AssertJUnit.assertEquals;


public class RouterTest {

    private WebDriver browser;

    private Actions builder;

    @BeforeMethod
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        browser = new ChromeDriver();
        builder = new Actions(browser);
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        browser.manage().window().maximize();
        browser.navigate().to("http://localhost:8081");
    }
    // Zakazivanje predefinisanih pregleda
    @Test
    public void Test1() {
        WebElement button0 = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/mat-toolbar/button/span/mat-icon"));
        button0.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement buttonn = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav/div/mat-nav-list/a[1]/div"));
        buttonn.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement element = this.browser.findElement(By.xpath("//*[@id=\"email\"]"));
        assertNotNull(element);
        element.sendKeys("weca997@gmail.com");
        WebElement element2 = this.browser.findElement(By.xpath("//*[@id=\"password\"]"));
        element2.sendKeys("Patient123");
        WebElement button = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/app-login/div/div/div/div/mat-card/form/button"));
        button.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button2 = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav/div/mat-nav-list/a[4]/div"));
        button2.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button3 = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/app-clinics-list/button[2]/span"));
        button3.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button4 = this.browser.findElement(By.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-predef-examination-dialog/mat-dialog-actions/button"));
        button4.click();
        browser.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

        button3.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        WebElement button5 = this.browser.findElement(By.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-predef-examination-dialog/table/tbody/tr[1]/td[8]/button"));
        button5.click();
        browser.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

    }

    //Pretraga klinika po paramatetrima
    @Test
    public void Test2() {
        WebElement button0 = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/mat-toolbar/button/span/mat-icon"));
        button0.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement buttonn = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav/div/mat-nav-list/a[1]/div"));
        buttonn.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement element = this.browser.findElement(By.xpath("//*[@id=\"email\"]"));
        assertNotNull(element);
        element.sendKeys("weca997@gmail.com");
        WebElement element2 = this.browser.findElement(By.xpath("//*[@id=\"password\"]"));
        element2.sendKeys("Patient123");
        WebElement button = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/app-login/div/div/div/div/mat-card/form/button"));
        button.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button2 = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav/div/mat-nav-list/a[4]/div"));
        button2.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button3 = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/app-clinics-list/button[1]"));
        button3.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button4 = this.browser.findElement(By.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-clinic-search-dialog/mat-dialog-content/div[1]/mat-form-field/div/div[1]/div[2]/mat-datepicker-toggle/button"));
        button4.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button5 = this.browser.findElement(By.xpath("/html/body/div[2]/div[4]/div/mat-datepicker-content/mat-calendar/div/mat-month-view/table/tbody/tr[5]/td[6]"));
        button5.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button6 = this.browser.findElement(By.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-clinic-search-dialog/mat-dialog-content/div[2]/mat-form-field/div/div[1]/div"));
        button6.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        WebElement button7 = this.browser.findElement(By.xpath("/html/body/div[2]/div[4]/div/div/div/mat-option[1]/span"));
        button7.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        WebElement button8 = this.browser.findElement(By.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-clinic-search-dialog/mat-dialog-actions/button[2]"));
        button8.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    // Nedovrsen test zakazivanja pregleda
    /*
    @Test
    public void Test3() {
        WebElement button0 = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/mat-toolbar/button/span/mat-icon"));
        button0.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement buttonn = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav/div/mat-nav-list/a[1]/div"));
        buttonn.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement element = this.browser.findElement(By.xpath("//*[@id=\"email\"]"));
        assertNotNull(element);
        element.sendKeys("weca997@gmail.com");
        WebElement element2 = this.browser.findElement(By.xpath("//*[@id=\"password\"]"));
        element2.sendKeys("Patient123");
        WebElement button = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/app-login/div/div/div/div/mat-card/form/button"));
        button.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button2 = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav/div/mat-nav-list/a[4]/div"));
        button2.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button3 = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/app-clinics-list/button[1]"));
        button3.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button4 = this.browser.findElement(By.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-clinic-search-dialog/mat-dialog-content/div[1]/mat-form-field/div/div[1]/div[2]/mat-datepicker-toggle/button"));
        button4.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button5 = this.browser.findElement(By.xpath("/html/body/div[2]/div[4]/div/mat-datepicker-content/mat-calendar/div/mat-month-view/table/tbody/tr[5]/td[6]"));
        button5.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button6 = this.browser.findElement(By.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-clinic-search-dialog/mat-dialog-content/div[2]/mat-form-field/div/div[1]/div"));
        button6.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        WebElement button7 = this.browser.findElement(By.xpath("/html/body/div[2]/div[4]/div/div/div/mat-option[1]/span"));
        button7.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        WebElement button8 = this.browser.findElement(By.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-clinic-search-dialog/mat-dialog-actions/button[2]"));
        button8.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        WebElement button9 = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/app-clinics-list/table/tbody/tr[1]/td[4]/button"));
        button9.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS); // doctors

        WebElement button10 = this.browser.findElement(By.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-doctor-list-patient/table/tbody/tr/td[5]/button"));
        button10.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        WebElement button11 = this.browser.findElement(By.xpath("/html/body/div[2]/div[4]/div/mat-dialog-container/app-patient-make-examination/mat-dialog-actions/button[1]"));
        button11.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        button9.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        button10.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }*/

    @AfterMethod
    public void tearDown() {
        browser.close();
    }
}
