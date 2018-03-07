package com.protractor.demo.repository;

import com.protractor.demo.domain.Book;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;

import java.util.List;


/**
 * Spring Data JPA repository for the Book entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByAuthor_Id(Long id);
}
