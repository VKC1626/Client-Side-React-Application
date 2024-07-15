import React from "react";

const Table = () => {
  return (
    <div class="tablebox">
      <table>
        <tr>
          <th>Category</th>
          <th>Statistics</th>
        </tr>
        <tr>
          <td>Global AI Market Size</td>
          <td>Estimated to reach $190.61 billion by 2025 (Statista)</td>
        </tr>
        <tr>
          <td>AI Job Growth</td>
          <td>Projected to create 58 million new jobs by 2022 (WEF)</td>
        </tr>
        <tr>
          <td>AI Adoption Rate</td>
          <td>
            37% of organizations have implemented AI in some form (Gartner)
          </td>
        </tr>

        <tr>
          <td>AI Patent Activity</td>
          <td>
            Over 360,000 AI-related patent applications filed worldwide since
            2010 (WIPO)
          </td>
        </tr>
        <tr>
          <td>AI in Healthcare</td>
          <td>
            AI healthcare market expected to reach $45.2 billion by 2026 (Grand
            View Research)
          </td>
        </tr>
        <tr>
          <td>AI in Finance</td>
          <td>
            75% of financial executives believe AI will fundamentally change the
            industry (PwC)
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
