package com.mycollab.test.spring;

import com.mycollab.module.page.PageSessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.extensions.jcr.JcrTemplate;
import org.springframework.extensions.jcr.jackrabbit.RepositoryFactoryBean;

import javax.jcr.SimpleCredentials;

/**
 * @author MyCollab Ltd.
 * @since 4.6.0
 */
@Configuration
@Profile("test")
public class PageConfigurationTest {
    @Bean
    public RepositoryFactoryBean pageRepository() {
        RepositoryFactoryBean bean = new RepositoryFactoryBean();
        bean.setConfiguration(new ClassPathResource("wiki-repo-test.xml"));
        bean.setHomeDir(new FileSystemResource("wiki-repo-test"));
        return bean;
    }

    @Bean
    public PageSessionFactory pageJcrSessionFactory() throws Exception {
        PageSessionFactory bean = new PageSessionFactory();
        bean.setRepository(pageRepository().getObject());
        bean.setCredentials(new SimpleCredentials("hainguyen", "esofthead321"
                .toCharArray()));
        return bean;
    }

    @Bean
    public JcrTemplate pageJcrTemplate() throws Exception {
        JcrTemplate bean = new JcrTemplate();
        bean.setSessionFactory(pageJcrSessionFactory());
        bean.setAllowCreate(true);
        return bean;
    }
}