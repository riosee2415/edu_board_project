export const detailController = (req, res) => {
  const db = req.body.connection;

  const sql = `
  SELECT		A.board_no                             AS no,
            A.title                                AS title,
            B.name                                 AS author,
            '0'				                             AS hit,
            DATE_FORMAT(A.created, '%Y-%m-%d')     AS created
    FROM		board		A	
    JOIN 		emp			B
      ON	  A.author = B.m_no
   WHERE    A.board_no = ${req.query.pk}
  `;

  db.query(sql, (error, rows) => {
    console.log(rows);

    res.render(`screens/board/detail`);
  });
};

export const editController = (req, res) => {
  res.render("screens/board/edit");
};

export const listController = (req, res) => {
  const db = req.body.connection;

  const sql = `
  SELECT		A.board_no                             AS no,
            A.title                                AS title,
            B.name                                 AS author,
            '0'				                             AS hit,
            DATE_FORMAT(A.created, '%Y-%m-%d')     AS created
    FROM		board		A	
    JOIN 		emp			B
      ON	  A.author = B.m_no
  `;

  db.query(sql, (error, rows) => {
    res.render("screens/board/list", { boardList: rows });
  });
};

export const writeController = (req, res) => {
  res.render("screens/board/write");
};
