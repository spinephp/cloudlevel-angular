import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
import { SettingsService } from '../commons/service/settings.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivacyPolicyResolveService {

  constructor(
    // private router: Router,
    private cv: SettingsService,
    ) {}
  resolve(): {} {
    const word: {} = {
      // 'Privacy Policy': ['隐私政策'],
      'xingming Liu built the CloudLevel app as a Free app. This SERVICE is provided by xingming Liu at no cost and is intended for use as is.': ['刘兴明将云水平仪应用程序构建为一个免费的应用程序。此服务由刘兴明免费提供按原样使用。'],
      'This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.': ['如果有人决定使用我的服务，本页面用于告知访问者我的收集、使用和披露个人信息的政策。'],
      'If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.': ['如果您选择使用“我的服务”，则您同意收集和使用与此策略相关的信息。我收集的个人信息用于提供和改进服务。我不会使用或与任何人分享您的信息，除非本隐私政策中有描述。'],
      'The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at CloudLevel unless otherwise defined in this Privacy Policy.': ['本隐私政策中使用的术语具有与我们的条款和条件中相同的含义，除非本隐私政策中另有规定，否则可在云水平仪访问这些术语。'],
      'Information Collection and Use': ['信息收集与利用'],
      'For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to Mobile contact, location information, APP opening time, mobile ID. The information that I request will be retained on your device and is not collected by me in any way.': ['为了获得更好的体验，在使用我们的服务时，我可能会要求您向我们提供某些个人身份信息，包括但不限于移动联系人、位置信息、应用程序打开时间、移动ID。我请求的信息将保留在您的设备上，我不会以任何方式收集这些信息。'],
      'The app does use third party services that may collect information used to identify you.': ['该应用程序确实使用第三方服务，这些服务可能会收集用于识别您身份的信息。'],
      'Link to privacy policy of third party service providers used by the app': ['链接到应用程序使用的第三方服务提供商的隐私策略'],
      'I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.': ['我想告诉你，每当你使用我的服务时，如果应用程序出现错误，我会在你的手机上收集数据和信息（通过第三方产品），称为日志数据。此日志数据可能包括诸如设备Internet协议（“IP”）地址、设备名称、操作系统版本、使用“我的服务”时应用程序的配置、使用服务的时间和日期以及其他统计信息等信息。'],
      Cookies: ['浏览器缓存'],
      'Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device\'s internal memory.': ['浏览器缓存是包含少量数据的文件，通常用作匿名唯一标识符。这些文件将从您访问的网站发送到您的浏览器，并存储在设备的内存中。'],
      'This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.': ['此服务不显式使用这些“cookies”。然而，该应用程序可能会使用第三方代码和库来收集信息并改进其服务。您可以选择接受或拒绝这些cookie，并知道何时将cookie发送到您的设备。如果您选择拒绝我们的cookies，您可能无法使用此服务的某些部分。'],
      'Service Providers': ['服务提供商'],
      'I may employ third-party companies and individuals due to the following reasons:': ['我可能会雇用第三方公司和个人，原因如下：'],
      'To facilitate our Service;': ['方便我们的服务；'],
      'To provide the Service on our behalf;': ['代表我们提供服务；'],
      'To perform Service-related services; or': ['提供服务相关服务；或'],
      'To assist us in analyzing how our Service is used.': ['帮助我们分析我们的服务是如何使用的。'],
      'I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.': ['我想通知此服务的用户，这些第三方可以访问您的个人信息。原因是代表我们执行分配给他们的任务。但是，他们有义务不披露或将信息用于任何其他目的。'],
      Security: ['安全'],
      'I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.': ['我很重视您对我们提供您的个人信息的信任，因此我们正在努力使用商业上可接受的方法来保护它。但是请记住，没有一种方法可以通过互联网传输，或者说我不能保证它的绝对安全。'],
      'Links to Other Sites': ['链接到其他网站'],
      'This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.': ['此服务可能包含指向其他站点的链接。如果您点击第三方链接，您将被定向到该站点。请注意，这些外部站点不是我操作的。因此，我强烈建议您审查这些网站的隐私政策。我对任何第三方网站或服务的内容、隐私政策或实践不承担任何责任。'],
      'Children’s Privacy': ['儿童隐私'],
      'These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.': ['这些服务不针对13岁以下的人。我不会故意收集13岁以下儿童的个人识别信息。如果我发现一个13岁以下的孩子向我提供了个人信息，我会立即从服务器上删除这些信息。如果您是家长或监护人，并且您知道您的孩子向我们提供了个人信息，请与我联系，以便我能够采取必要的行动。'],
      'Changes to This Privacy Policy': ['此隐私策略的更改'],
      'I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.': ['我可能会定期更新我们的隐私政策，以防有任何变化。如果有任何更改，我会在本页上发布新的隐私政策。这些更改在发布到本页后立即生效。'],
      'Contact Us': ['联系我们'],
      'If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at admin@yrr8.com.': ['如果您对我的隐私政策有任何疑问或建议，请随时联系我admin@yrr8.com。'],
    };
    this.cv.addLanguages(word);
    return Promise.all([]).then(rs => {
      return of([]).toPromise();
    }).then(rs => {
      return rs;
    });
  }
}
